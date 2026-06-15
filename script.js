* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #222;
    color: white;
    text-align: center;
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
}

.pista {
    position: relative;
    width: 90%;
    max-width: 1000px;
    height: 80px;
    margin: 15px auto;
    background: #444;
    border: 2px solid white;
    overflow: hidden;
}

.chegada {
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 100%;
    background: repeating-linear-gradient(
        45deg,
        white,
        white 10px,
        black 10px,
        black 20px
    );
}

.carro {
    position: absolute;
    left: 0;
    top: 15px;
    font-size: 40px;
    transition: left 0.1s linear;
}

button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background: #28a745;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #218838;
}

#resultado {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
}