module.exports = {
    apps: [
      {
        name: 'dlms',
        script: 'uvicorn',
        args: 'main:app --port 7007',
        interpreter: './venv/bin/python',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        log_file: 'pm2.log',
        error_file: 'pm2_error.log',
      },
    ],
  };
  