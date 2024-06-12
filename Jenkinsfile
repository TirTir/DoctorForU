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
                sh 'cd /var/jenkins_home/workspace/service-discovery'
                sh 'chmod +x gradlew'
                sh './gradlew clean'
            }
        }

         stage('Build') {
            steps {
                sh './gradlew build'
            }
        }
        
        stage("Build Image") {
            steps {
                script {
                    dockerImage = docker.build registry
                    dockerImage.tag("$BUILD_NUMBER")
                }
            }
        }
        
        stage("Push Image") {
            steps {
                script {
                    sh "aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 035574589515.dkr.ecr.ap-northeast-2.amazonaws.com"
                    sh "docker push 035574589515.dkr.ecr.ap-northeast-2.amazonaws.com/jenkins:$BUILD_NUMBER"
                      
              }
          }
      }
   }
}
