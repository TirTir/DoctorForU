pipeline {
    agent any
    
    environment {
        imagename = "DoctorForU-${BUILD_NUMBER}"
        registryCredential  = 'docker-hub'
        dockerImage = ''
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
                dir('/var/lib/jenkins/workspace/jenkins/service-discovery'){
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
                dir('/var/lib/jenkins/workspace/jenkins/service-discovery'){
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
                        docker.withRegistry( '', registryCredential) {
                            dockerImage.push() 
                        }
                }
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
