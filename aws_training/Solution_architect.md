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
- by default a user won't have permitions.
- The principle of least privilage, allows assign users the privilage they need to do they job.
- Access ID and serect access key are not the same as username and password.
- Iam is universal
- The root account is setup when you create the Account.
- 4 steps to secure your AWS Root Account
    - enable MFA
    - Create an Admin group
    - Create user Acounts
    - Add your users to the admin group 

### S3 Overview
- S3 provides secure, durable, highly scable object storage.
- S3 allows you to store and retrive any amount of data from anywhere on the web with a very low cost.
- it is an object based storage
    - upload files of any type.
    - it can't be used to run Operating Systems.
    - you store static files.
    - unlimited storage.
    - when you upload files successfully you will recieve HTTP 200.
- key-value store
    - key, name of the object.
    - version ID, important to store multiple versions of the same object.
    - value, the data it self.
    - Metadata, Data about the data you storing.
- S3 is build for availability and it is designed for durability.
    - S3 standard
        - high availability  and durability.
        - designed for frequent Access.
        - Suitable for most Workloads.
            - The default storage class.
            - include websites.
            - content distribution, mobile and gaming applications.
    - Tired Storage(we also have lifecycle Management) The define rules to automatically transition objects to a cheaper storage tier.
    - Versioning
- Securing your Data
    - server-side Encryption
    - Access control lists(ACLs) this allows you to define which Accounts or groups have been granded Access and the type of Access.
    - Bucket Policies, they specify what actions are allowed or denied.
    - The consistency Model is strong read after write.
- S3 operates on a global space.
    - Tips
        - buckets are pivate by default.
        - object ACLs can make individual objects public.
        - bucket policies can make entire buckets plublic using bucket policies.
        - HTTP status code, when you upload an object to S3 and it's successful you recieve HTTP 200 code.
- Hosting static Websites on S3
    - Dnyamic websites can't be hosted on S3 that require database connection.
    - S3 scale automatically to meet demand.
    - we enable this feature as well.
    - amazon resource name-arn
        - tips
            - Bucket policies: make the entire buckets public.
            - static Content: use S3 to host static content(not dynamic)
            - Automatic Scaling: S3 scales automatically with demand.
- Versioning S3 objects
    - advantages of versioning
        - all versions of an object are stored in S3.
        - Backup can be a great tool.
        - Cannot be disabled once enabled.
        - Lifecycle rules can be implemented.
        - It also support MFA(multi-factor authentication)
    - you can access versioning under properties and encryptionn as well.
    - every version of a static ppage needs to be enabled in order to access it ppublically.
- Storage Classes
    - S3 standard
        - high availability and durability as data is stored in multiple facilities.
        - designed for frequent access.
        -  suitable for most workloads.
    - S3 Standard infrequent Access(S3 Standard-IA)
        - rapid Access is for data that is less accessed
        - you pay to access the
        - use case, great for long term storage, backups.
    - S3 one zone-infrequent access
        - data is stored redundatly within a single AZ and it costs 20% less than regular Standard-IA.
    - (2 teirs) S3 Intelligent-Tiering
        - it has frequent and infrequent access capabilities.
        - So it automatically moves your Data to the most cost-effective tier based how frequent you access the data.
        - it's good for optimizing cost.
- Glacier Options
    - you pay to access time you access your data.
    - Use only for archiving data.
    - glacier is cheapp storage.
    - optimizing for data that is very infrequently accessed.
        - Option 1
            - glacier innstant retieval
                - provides long-term data archivinng.
        - Option 2
            - glacier flexible retrieval
                - such as backup or disaster recovery use cases, can be minutes or 12 hours.
        - Option 3
            - glacier deep archive
                - this is for data sets fro 7-10 years or longer and the standard etrieval time is 12 hours and for a bulk retrieval is 48 hours.
- Lifecycle Management
    - It automates moving your objects bwtween the different storage tiers.
        - S3 Standard(After for 30 days)
        - S3 Standard-IA(After 30 days)
        - Glacier(After 90 days)
    - it this can be implemented as on versioning.
    - this rules of lifecycle are under management for S3.
    lifecycles can be applied to current versions and previous versions.
- S3 Object Lock and Glacier vault lock
    - you can use object lock to store objects using a write once, read many (WORM) model.
    - this can prevent objects from being deleted or modified.
    - S3 object lock modes
        - Governance mode
            - users can't overwrite or delete an object version or alter it's lock settings.
            - but you still grand some users permission to alter the rretention settings.
        - Compliance mode
            - A protected object version can't be overwritten or deleted by any user, including the root user.
            - the rentetion mode can't be changed.
            - it ensures that an object version can't be overwritten or deleted for the duration of the rentention period.
    - Retention Periods
        - protects an object version for a fixed amount of time.
        - When the retention period expires, the object version can be overwritten or deleted unless the is a legal hold.
    - Legal Hold
        -  A legal hold prevents an object version from being overwritten or deleted.
            ~~~
            S3: PutObjectLegalHold permission
            ~~~
    - Glacier Vault Lock
        -  It allows you to easily deploy and enforce compliance controls for individual S3 glacier vaults with a vault lock policy.
- Encryption S3 objects
    - Types of encryption
        - encryption in transit
            - SSL/TLS.
            - HTTPS.
        - encryption at rest: server-side encryption
            - SSE-S3: S3-managed keys, using AES 256-bit encryption.
            - SSE-KMS AWS Key Management service-managed keys.
            - SSE-C Customer-pprovided keys.
        - Encryption at Rest: client-side encryption
            - you encrypt files yourself.
        - Enforcing encryption with a bucket policy.
- Optimizing S3 performance
    - s3 prefixes
        - this are folders inside your bucket.
    - S3 has aextremely low latency.
    - to inncrease performance we will have to spread the reads in diferent prefixes.
    - multipart uploads
        - recommended files over 100mb.
        - required files over 5gb.
        - parallelize uploads(increase efficiency) big file gets split into parts that's parallel uploads.
    - S3 performance: downnloads
        - S3 byte-range fetches
            - downloads by specifying byte ranges.
            - if the is a failure it's only for a specific byte range.
- Backing up Data with S3 Replication
    - you can replicate objects from one bucket to another
    - objects in an existing bucket are not replicated automatically.

### Elastic Compute Cloud(EC2) Overview
- It is a secure, resizable compute capacity in the cloud.
- EC2 pricing Options.
    - on-demand, pay by the hour or seconds, depending on the type of instance.
    - reserved, this capacity is for 1 to 3 years, over 75% discount.
    - spot, purchase unused capacity.
    - dedicated, this is more expensive, having a physical EC2.
- On-demand Instance
    - it is flexible low cost and flexible without anny upfront payment.
    - short-term applications with unpredictable workloads.
    - testing the water, building for development and testing.
- reserved Instances
    - predictable usage.
    - specific capacity requirements.
    - pay upfront.
    - Statndard reserve instances save up to 72%.
    - Covertable reserve instances save up to 54%.
    - Scheduled reserved instances.
- The command line
    - This allows us to ssh to our EC2 instance, this can give us more control to go inside our virtual machines and configure our S3 buckets or run other commands needed to perform tasks.
    - to access your aws services in your EC2 instances you need to have a user who has full access on the S3 bucket service on the the group policy.
    - in order to acces this account you will have to copy your access ID and your secret access key to configure your aws cli in your EC2 instances.
    - we can also create an S3 bucket inside our EC2 by running aws S3 mb S3://(The name of the bucket).
    - we can also upload files to the bucket via the terminal to our S3 bucket.
- We look at IAM role in terms of S3
    - It is an idenity with permision policies to allows access on aws services.
    - roles are temporary
        - it doesn't really have long-term standardd.
        - it provides temporary secuirty roles needed by the user.
        - roles can allow cross-account access and this allow another account to interact with resources on another aws account.
        - We can also see the policy summary
- Secuirty groups and bootstrap scripts
    - how cumputers communicate
        - linux on ssh port 22.
        - windows rdp port 3389.
        - HTP web browsing port 80.
        - HTTPS web browsing(SSL) port 443.
    - secuirty groups 
        - they are virtual firewalls for EC2 instance, by default everything is blocked.
        - 