## Docker Notes

#### Multi-project Docker files
  * This Technique of our Docker file allows us to reduce the size of the Docker
   image. 
    ~~~
    FROM ubuntu:16.04 as builder
    RUN apt-get update
    RUN apt-get -y install curl
    RUN curl https://google.com | wc -c > google-size

    FROM alpine
    COPY --form=builder /google-size /google-size
    ENTRYPOINT echo google is this big in size; cat google-size

    -To run this docker file we will run docker build -t [name of the image]
    ~~~
##### Preventing the golden Image problem
  * Include installers in your projects.
  *  
