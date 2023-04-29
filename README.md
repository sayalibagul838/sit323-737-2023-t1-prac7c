-To verify the application run the following commands-
a. kubectl get pods
b. kubectl get services
to forward the traffic-
kubectl port-forward saya0 3000 
-Access the application by accessing-
https://localhost:3000

-Update the code and build image with new version tag
a. docker build -t newimage0:new_version
b. docker run -d -p 3000:3000 cont1 newimage0:new_version
-Push the image to docker hub
a. docker login
b. docker push sayali063/newimage0:new_version
-Update the kubernetes deployment, services configuration files
 run the following commands-
a. kubectl apply -f createDeployment.yaml

b. kubectl apply -f firstservice-service.yaml

c. kubectl -n kubernetes-dashboard create token admin-user ( to get token )

d. kubectl proxy ( to start the kubernetes dashboard)
