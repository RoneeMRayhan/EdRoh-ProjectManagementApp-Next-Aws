module.exports={//ec2 pm2 aws
    apps:[
        {
            name:"project-management",
            script:"pnpm",
            args:"run dev",
            env:{
                NODE_ENV:"development",
            }
        }
    ]
}