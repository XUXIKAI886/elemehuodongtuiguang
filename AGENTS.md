## 2025-09-29
- 端口检测：执行 `lsof -ti:3000`，未发现占用进程。
- 启动命令：执行 `npm run docs:dev -- --port 3000 --host 0.0.0.0`，已确认服务输出成功（使用 timeout 20s 结束进程以便后续操作）。

## 2025-09-29（端口 5678）
- 端口检测：执行 `lsof -ti:5678`，未发现占用进程。
- 启动命令：执行 `npm run docs:dev -- --port 5678 --host 0.0.0.0`，已看到服务输出，使用 timeout 20s 结束进程以便继续操作。
- 后台启动：通过 `Start-Process npm run docs:dev -- --port 5678 --host 0.0.0.0` 启动开发服务器。
- 后台启动：执行 `nohup npm run docs:dev -- --port 5678 --host 0.0.0.0 > server.log 2>&1 &`，将服务常驻于后台。

## 2025-09-30
- 端口检测：执行 `netstat -ano | findstr :3000`，未发现占用进程。
- 启动命令：执行 `npm run docs:dev -- --port 3000 --host 0.0.0.0`，输出记录于 `server.log`。
- 进程信息：`netstat -ano | findstr :3000` 显示监听 PID 17972。
