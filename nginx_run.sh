docker run --name learnWebServiceDemo -d -e name="test" -v $(pwd)/src:/usr/share/nginx/html -p 80:80 learn_web_service:0.0