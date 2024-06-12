pipeline {
    agent any
    
    environment {
        registry = "035574589515.dkr.ecr.ap-northeast-2.amazonaws.com/jenkins"
        serviceDiscoveryImage = "${registry}:serviceDiscovery-${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/TirTir/DoctorForU']])
            }
        }

         stage('Clean') {
            steps {
                dir('/var/lib/jenkins/workspace/jenkins/service-discovery'){
                    sh 'chmod +x gradlew'
                    sh './gradlew clean'
                }
            }
        }

         stage('Build') {
            steps {
                dir('/var/lib/jenkins/workspace/jenkins/service-discovery'){
                    sh './gradlew build'
                }
            }
        }

        stage("Push Image to ECR") {
            steps {
                script {
                    sh '''
                        docker build -t ${serviceDiscoveryImage} /var/lib/jenkins/workspace/jenkins/service-discovery 
                        aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 035574589515.dkr.ecr.ap-northeast-2.amazonaws.com
                        docker push ${serviceDiscoveryImage}
                    '''
                }
            }
        }
        
        stage('Invoke Sub Pipeline') {
            steps {
                build job: 'jenkins-sub-pipeline', parameters: [
                    string(name: 'SERVICE_DISCOVERY_VERSION', value: "${BUILD_NUMBER}"),
                ]
            }
        }
   }
}
