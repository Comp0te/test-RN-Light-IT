import React from 'react';
import { SafeAreaView, View } from 'react-native';
import * as PropTypes from 'prop-types';
import style from './style';

import ProductsList from '../../components/ProductsList';
import Spinner from '../../components/Spinner';
import AdBanner from '../../components/AdBanner';

const ProductsScreen = (
  {
    productsIds,
    isLoadingProducts,
    productsEntities,
  },
) => (
  <SafeAreaView
    style={style.safeArea}
    testID="productsScreen"
  >
    <View style={style.root}>
      {
          isLoadingProducts
            ? <Spinner />
            : (
              <>
                <ProductsList
                  productsIds={productsIds}
                  productsEntities={productsEntities}
                />
                <AdBanner />
              </>
            )
        }
    </View>
  </SafeAreaView>
);

ProductsScreen.propTypes = {
  productsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingProducts: PropTypes.bool.isRequired,
  productsEntities: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default React.memo(ProductsScreen);
