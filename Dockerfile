FROM nginx:latest

RUN service nginx start

# WORKDIR /workspace
# RUN mkdir learnWebService
# COPY src /workspace/learnWebService