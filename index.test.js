const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('La página debe contener "Hola Mundo"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.textContent).toBe('Hola Mundo');
});

test('La página debe mostrar el nombre y matrícula', () => {
    const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
    const dom = new JSDOM(html);
    const p = dom.window.document.querySelector('p');
    expect(p.textContent).toBe('Wikelson Diaz Alcantara - 2023-0974');
});
