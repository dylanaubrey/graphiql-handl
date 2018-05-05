import { Request, Response, Router } from "express";

import {
  execute,
  GraphQLSchema,
  IntrospectionQuery,
  introspectionQuery,
  parse,
} from "graphql";

import * as path from "path";
import htmlTemplate from "~/template";
import { GraphiQLHandlArgs, ObjectMap, PreLoadedState } from "~/types";

async function getPreLoadedState(args: GraphiQLHandlArgs): Promise<PreLoadedState> {
  const { headers, propsPath, rootDir, schemaPath, url } = args;
  let introspection: IntrospectionQuery | undefined;
  let schema: GraphQLSchema | undefined;
  let result: { data?: ObjectMap; [key: string]: any; };

  if (schemaPath) {
    const mod = require(path.resolve(rootDir, schemaPath));
    schema = mod.default ? mod.default : mod;

    if (schema instanceof GraphQLSchema) {
      result = await execute(schema, parse(introspectionQuery));
      introspection = result.data as IntrospectionQuery;
    }
  } else if (url) {
    const res = await fetch(url, {
      headers: new Headers(headers),
    });

    result = await res.json();

    if (!result || !result.data) {
      return Promise.reject(new Error("GraphiqlHandl did not receive any data from the introspection query."));
    }

    introspection = result.data as IntrospectionQuery;
  }

  let props: ObjectMap = {};

  if (propsPath) {
    props = require(path.resolve(rootDir, propsPath));
  }

  return {
    headers,
    introspection,
    props,
    url,
  };
}

export default async function getRouter(args: GraphiQLHandlArgs): Promise<Router> {
  const router = Router();

  router
    .get("/", async (req: Request, res: Response): Promise<void> => {
      try {
        res.status(200).send(htmlTemplate(await getPreLoadedState(args)));
      } catch (error) {
        res.status(500).send(error);
      }
    })
    .get("*", (req: Request, res: Response): void => {
      res.redirect("/");
    });

  return router;
}
