# --- Backend Dockerfile ---
    FROM node:18

    # Tạo thư mục làm việc
    WORKDIR /app
    
    # Copy file package
    COPY package*.json ./
    
    # Cài đặt dependencies
    RUN npm install
    
    # Copy toàn bộ code
    COPY . .
    
    # Expose port
    EXPOSE 3001
    
    # Chạy app
    CMD ["npm", "start"]
    