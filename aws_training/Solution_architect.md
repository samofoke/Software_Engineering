# Cloud Principles

## Availability Zones.
- An availability Zone is a Data center.
    - Is a building filled with servers
- A region is a geo area
    - every region has 2 availability zones
- Edge Location
    - are endpoints for AWS that are used for caching content.
    - Examples will be CloudFront, Amazon's content Network(CDN)
- AWS Global Infrastructure
    - Compute
    - Containers
    - Storage
    - Databases
    - Network & Content Delivery
    - Migration & Transfer
    - Management & Governance
    - Analytics
    - Security, Identity & Compliance
    - Application Integration
    - AWS Cost Management
- The Shared Responsibility Model

    - AWS Responsibility
        - Software
            - Compute.
            - Storage.
            - Database.
            - Networking.
        - Hardware/ Golbal infrastructure
            - Regions.
            - Availability Zones.
            - Edge Locations.

    - Customer Responsibility

        - Customer Data
            - Platform
            - Application
            - Identity & Access Management

        - Operating system, Network & Firewall Configuration
            - Client-side Data Encryption
            - Server-side Encryption
            - Networking Traffic Protection 

### Compute
#### When we talk about Compute we looking at services such as:
- EC2
- Lambda
- Elastic Beanstalk.
### Storage
#### It's more like a giant disk in the cloud which allows us to save information.
- S3
- EBS
- EFS
- FSx
- Storage Gateway
### Databases
#### It's a reliable way to store and retrieve information.
- RDS
- DynamoDB
- Redshift
### Networking
#### This allows us our compute, storage and databases to communicate.
- VPCs
- Direct Connect
- Route 53
- API Gateway
- AWS Gobal Accelerator

#### The key services for the exam
- Compute
    - EC2
    - Lambda
    - Elastic Beanstalk
- Storage
    - S3
    - EBS
    - EFS
    - FSx
    - Storage Gateway
- Databases
    - RDS
    - DynamoDB
    - Redshift
- Networking
    - VPCs
    - Direct Connect
    - Route 53
    - API Gateway
    - AWS Gobal Accelerator

### Well-Architected Framework 5 Pillars
- Operations Excellence
- Security
- Reliability
- Performance Efficiency
- Cost Optimization

### Identity and Access Management(IAM)
- The featue allows you to manage users and the they level of access on the AWS console.
- Policy Document
    ~~~
    {
        "version" : "2012-10-17"
        "Statement" : [
            {
                "Effect" : "Allow",
                "Action" : "*",
                "Resource" : "*"
            }
        ]
    }
    ~~~
- Policy documents include groups, Users, Roles.
- The best practice is to inherit permissions from permition.
- Groups --> to Users
- The principle of least privilage, allows assign users the privilage they need to do they job.
- Access ID and serect access key are not the same as username and password.
- testing