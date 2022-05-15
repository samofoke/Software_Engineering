## Docker Notes

### Multi-project Docker files

- This Technique of our Docker file allows us to reduce the size of the Docker
  image.

  ```
  FROM ubuntu:16.04 as builder
  RUN apt-get update
  RUN apt-get -y install curl
  RUN curl https://google.com | wc -c > google-size

  FROM alpine
  COPY --form=builder /google-size /google-size
  ENTRYPOINT echo google is this big in size; cat google-size

  -To run this docker file we will run docker build -t [name of the image]
  ```

### Preventing the golden Image problem

- Include installers in your projects.

### Docker Registry

- is a program
- It stores layers and images
- it listens on port 500 (usually)
- it also tracks who's allowed to login, Auth and authenticate connections.

  ```
  sample command

  docker run -d -p 5000:5000 --restart=always --name registry registry:2
  ```

* This help in terms of saving your images locally.

- Saving and loading containers helps a lot with Migrating between storage types.
- Shipping your images to other people.

### Orchestration

- Docker Compose is for single machine coordination.
- which is designed for testing and development.
- It brings up all your containers, volumes, networks in one command.
