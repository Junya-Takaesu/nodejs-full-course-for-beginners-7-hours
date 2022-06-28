# Build command:
# docker build . -t node-16-7-hours

# Run script:
# cd 01tut/
# docker run -it --rm -v $(pwd):/app --workdir /app node-16-7-hours index.js

FROM node:16.15.1