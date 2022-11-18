import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba de <GifItem />', () => {
    const url = 'https://media.giphy.com/media/d2PqO9s7M9CNO/giphy.gif';
    const title = 'S01e01 GIF';
    test('Validación del snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});