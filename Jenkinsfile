pipeline {
    agent any
    
    environment {
        imagename = "DoctorForU-${BUILD_NUMBER}"
        registryCredential  = 'docker-hub'
        dockerImage = ''
        registry = "035574589515.dkr.ecr.ap-northeast-2.amazonaws.com/jenkins"
        serviceDiscoveryImage = "${registry}:serviceDiscovery-${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/TirTir/DoctorForU']])
            }
        }

        stage('Clean Gradle') {
            steps {
                dir('.'){
                    sh 'chmod +x gradlew'
                    sh './gradlew clean'
                }
            }
            post {
                failure {
                    error 'This pipeline stops here...'
                }
            }
        }

        stage('Build Gradle') {
            steps {
                dir('.'){
                    sh './gradlew build'
                }
            }
            post {
                failure {
                    error 'This pipeline stops here...'
                }
            }
        }

        stage("Build Docker") {
            steps {
                script {
                    sh '''
                        docker build -t ${serviceDiscoveryImage} /var/lib/jenkins/workspace/jenkins/service-discovery 
                        docker push ${serviceDiscoveryImage}
                    '''
                }
            }
            post {
                failure {
                    error 'This pipeline stops here...'
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
