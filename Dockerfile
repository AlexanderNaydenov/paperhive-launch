FROM node:5.5.0

# init workspace
RUN mkdir /workspace
WORKDIR /workspace

# env var fixes excessive npm log output
# see https://github.com/nodejs/docker-node/issues/57
ENV NPM_CONFIG_LOGLEVEL="warn"

# let bower run as root
# http://bower.io/docs/api/#allow-root
ENV BOWER_ALLOW_ROOT="true"

# copy dependency definitions and install them (may be cached!)
COPY package.json /workspace/
COPY bower.json /workspace/
RUN npm run install-deps

# copy and build src
COPY . /workspace
RUN npm run build

# test when launching container with this image
CMD npm run test
