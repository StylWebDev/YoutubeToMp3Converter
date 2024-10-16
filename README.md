
# YouTubeToMp3Converter

YouTubeToMp3Converter is a web application that allows users to convert YouTube videos to MP3 files by simply providing the video URL. The app is built using **Node.js**, **Express**, and **EJS** to handle the backend logic, routing, and rendering of dynamic web pages.

## Features

- Convert YouTube videos to MP3 audio files.
- Simple and clean user interface.
- Fast conversion process using YouTube video URLs.
- Download MP3 files directly to your device.

## Technologies Used

- **Node.js**: Backend runtime environment to handle server-side operations.
- **Express**: Framework for building web applications and handling HTTP requests.
- **EJS (Embedded JavaScript)**: Templating engine for rendering dynamic HTML content.
- **YouTube To Mp3 API**: For extracting and converting video URLs to MP3.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- npm (comes with Node.js)

## Installation

1. Clone this repository to your local machine:

```bash
$ git clone https://github.com/StylWebDev/YoutubeToMp3Converter.git
```

2. Navigate into the project directory:

```bash
$ cd YoutubeToMp3Converter
```

3. Install the dependencies:

```bash
$ npm install
```
4.  Add your API_KEY and API_HOST (Get a pair on [Rapid API](https://rapidapi.com/ytjar/api/youtube-mp36) ) into your .env file:
```bash
 $ touch .env
 $ echo "API_KEY=XXXX" > .env
 $ echo "API_HOST=XXX" >> .env 
```

## Running the App


After installing the necessary dependencies start the app:

```bash
$ npm start
```

This will start the application on `http://localhost:3000`. You can now visit this URL in your browser to use the app.

## How to Use

1. Open your browser and go to `http://localhost:3000`.
2. Paste a YouTube video URL into the input field.
3. Click the "Convert" button.
4. Wait for the conversion to complete.
5. Once the MP3 file is ready, a download link will be provided.

## API Endpoints

- **GET /**: Renders the homepage with a form to input the YouTube URL.
- **POST /convert**: Handles the YouTube URL, converts the video to MP3, and provides a downloadable link.


## Future Enhancements

- Add support for different audio formats (AAC, OGG, etc.).
- Enhance error handling for invalid YouTube URLs.
- Implement a progress bar to show conversion status.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Push your changes to your forked repository.
5. Submit a pull request.

## License

This project is licensed under the MPL 2.0 License. See the [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/) file for more details.

---

Feel free to contact me through  <a href="mailto:stylsbot@gmail.com">Email</a> if you have any questions or issues!
