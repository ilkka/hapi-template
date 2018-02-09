import * as Hapi from 'hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from 'inert';
import * as Vision from 'vision';
import Routes from './routes';

const createServer = async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });

  const swaggerOptions = {
    info: {
      title: 'Hapi Template',
      version: '1.0.0',
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      options: swaggerOptions,
      plugin: HapiSwagger,
    },
  ]);

  server.route(Routes);
  return server;
};

export {
  createServer,
};
