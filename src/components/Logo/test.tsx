import { render, screen } from '@testing-library/react';

import Logo from '.';

test('Should render image', () => {
  render(<Logo />);

  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});
