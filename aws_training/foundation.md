## Essential training

- root accounts
  - we use the identity and access Management(IAM)
    - you can assign users in terms of a group.
    - Squads can have they own policy.
    - Group names will have a unique id.
    - Group arn is tag for the whole user group.
- Setting up billing on aws.
  - usage is very important on the AWS so a user can set-up alerts.
  - The is also a calculator that allows you to check your estimates.
  - CloudWatch allows you to monitor your AWS services.
- On prem.
  - co-location - the Data center as Platform as service.
    - We look at on premise infrastructure which is self-serviced by that specific business owning that server.
    - handling load by using EC2 and S3 services.
    - EC2 allows Auto scaling to be able to handle traffic and load.
    - S3 Storage, form part of infrastructure as serice (IAAS) this is renting out virtually from a cloud provider and pay for what you use.
  - Regions and availability Zones.
    - North Virgina Region they're labeled as us-east-1a for example
- Infrastructure as Service(IaaS) Compute
  - for EC2 we Select launch and choose an Amazon machine Image(AMI), you will have to choose a an instance type, this include vCPUs, memory and network performance.
  - You have to make sure you launch and save your key pair, also make sure you have your instance selected before running it.
  ~~~
    This process is running your private key of aws on your local machine
    - chmod 400 ~/.ssh/my_aws_file
    and run:
    ssh -i "/.ssh/my_file" ubuntu if we running an aws image
    it will authenticate and you to say yes.
  ~~~
  - EC2 Types
    - Micro Instances
    - General purpose
    - Compute Optimized
    - FPGA Instances
    - GPU Instances
    - Memory Optimized
    - Storage Optimized
  -

### Building a CI/CD pipeline
* we config the EC2 instance and ssh inside it, this is a Linux image.
* The DevOpps cycle is Development, QA and IT operations.
* configuring the the git for the pippeline, so inside our instance we goinnng to rrun sudo yum update and after run sudo yum install git in our EC2 image.
* Deep dive on CodeCommit
    * in terms of CodeCommit will look at it with HTTPS and SSH
    * The HTTPS has credential helper and ssh works with RSA key pairs
    * PORT access for https is 443 and ssh is port 22.
    * https pros is that port 443 is open on firewalls, all data transfers are encrypted.
    * https has issues with keychain on MacOS.
    * ssh is efficient and all data transfers are encrypted.
    * Firewall somtimes blocks port 22 for ssh.
    * In terms of configuring CodeCommit we have to set IAM roles.from IAM we will go to users 
    * after creating the IAM roles we have to config git in our aws EC2 image for git hleper.
    * in our CLI we need run git config --global credential.helper '!aws --profile codecommit credential-helper $@' 
    * this allow us to access all our repos in our aws repos.
    * after we need to double check our git config --global file for credentials.
    * We also have to configurre the the ssh on our local machine in order to be able to get an ssh-keygen.
    * adding users to your EC2 instance
        * sudo adduser "UserName"
        * sudo su - "UserName"
        * mkdir .ssh
        * chmod 700 .ssh
        * cd .ssh
        * touch authorized_keys
        * chmod 600 authorized_keys
        * vim authorized_keys
        * exit
        * ssh -i "sshkey.pem" awsUser@ec2-54-235-62-167.compute-1.amazonaws.com
    * Understanding CodeCommit in terms of the Dev Team
        *  















