# learnWebService

## Launch
```
sh build.sh
sh run.sh
```

## Delete
```
docker ps
```
で`learn_web_service`に紐づいているCONTAINER IDを特定


```
✗ docker ps   
CONTAINER ID   IMAGE                   COMMAND                  CREATED              STATUS              PORTS                NAMES
8c8e55bf3982   learn_web_service:0.0   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:80->80/tcp   learnWebServiceDemo
```

```
docker stop 8c8e55bf3982
docker rm 8c8e55bf3982
```