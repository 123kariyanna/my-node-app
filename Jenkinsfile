pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps {
            git branch: 'main', credentialsId: 'git', url: 'https://github.com/123kariyanna/my-node-app.git'
            }
        }
        stage ('Install Dependecies'){
            steps{
                sh 'npm install'
            }
        }
        stage ('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage ('Build Doker Image'){
            steps{
           sh 'docker build -t my-node-app:latest .'
            }
        }
        stage('Run Container') {
            steps {
             sh '''
               docker rm -f my-node-app || true
                docker run -d -p 3000:3000 --name my-node-app my-node-app:latest
                 '''
                } 
            } 
            
        }
        
    }
