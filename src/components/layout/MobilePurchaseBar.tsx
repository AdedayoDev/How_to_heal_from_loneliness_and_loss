import { BOOK_PRICE, SELAR_CHECKOUT_URL } from "../../config/book";

function MobilePurchaseBar() {
  return (
    <aside className='mobile-purchase-bar' aria-label='Book purchase'>
      <div className='mobile-purchase-bar__inner'>
        {SELAR_CHECKOUT_URL ? (
          <a
            className='btn btn-primary mobile-purchase-bar__button'
            href={SELAR_CHECKOUT_URL}
          >
            Get My Copy: {BOOK_PRICE}
          </a>
        ) : (
          <>
            <button
              className='btn btn-primary mobile-purchase-bar__button'
              type='button'
              disabled
              aria-describedby='mobile-purchase-status'
              title='Official Selar checkout link has not been configured'
            >
              Get My Copy: {BOOK_PRICE}
            </button>
            <span
              className='mobile-purchase-bar__status'
              id='mobile-purchase-status'
            >
              Checkout link to be added
            </span>
          </>
        )}
      </div>
    </aside>
  );
}

export default MobilePurchaseBar;
