const express = require('express');

const PORT = 3001;

const api = express();

api.listen(PORT, () => console.log(`Running on port ${PORT}`));
