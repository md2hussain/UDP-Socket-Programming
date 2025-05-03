import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.bind(5500, '127.0.0.1');

server.on('message', (msg, info) => {
  console.log(`Server received: ${msg} from ${info.address}:${info.port}:${info.family}:${info.size}`);
});


