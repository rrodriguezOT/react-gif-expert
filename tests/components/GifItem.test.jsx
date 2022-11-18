import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba de <GifItem />', () => {
    const url = 'https://media.giphy.com/media/d2PqO9s7M9CNO/giphy.gif';
    const title = 'S01e01 GIF';
    test('Validación del snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con la URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el títutlo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title).innerHTML).toBeTruthy();
    });
});