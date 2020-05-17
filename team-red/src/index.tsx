import * as React from 'react';
import { PiletApi } from 'app-shell';

const ProductPage = React.lazy(() => import('./ProductPage'));

export function setup(app: PiletApi) {
  app.registerPage('/products/:name?', ({ history, match, piral }) => (
    <ProductPage
      name={match.params.name || 'porsche'}
      history={history}
      BasketInfo={() => <piral.Extension name="basket-info" />}
      BuyButton={({ item }) => <piral.Extension name="buy-button" params={{ item }} />}
      Recommendations={({ item }) => <piral.Extension name="recommendations" params={{ item }} />}
    />
  ));
}
