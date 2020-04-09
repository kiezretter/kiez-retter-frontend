import verifiedIcon from '../../assets/images/verifiziert.png';
import shareIcon from '../../assets/images/sharing.png';
import bar1 from '../../assets/images/bar1.png';
import bar2 from '../../assets/images/bar2.png';
import bar3 from '../../assets/images/bar3.png';
import club1 from '../../assets/images/club1.png';
import club2 from '../../assets/images/club2.png';
import club3 from '../../assets/images/club3.png';
import late_shop1 from '../../assets/images/late_shop1.png';
import late_shop2 from '../../assets/images/late_shop2.png';
import late_shop3 from '../../assets/images/late_shop3.png';
import restaurant1 from '../../assets/images/restaurant1.png';
import restaurant2 from '../../assets/images/restaurant2.png';
import restaurant3 from '../../assets/images/restaurant3.png';
import cafe1 from '../../assets/images/cafe1.png';
import cafe2 from '../../assets/images/cafe2.png';
import cafe3 from '../../assets/images/cafe3.png';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import ownerPlaceholder from '../../assets/images/owner_placeholder.png';
import shopPlaceholder from '../../assets/images/shop_placeholder.png';
import payPalIcon from '../../assets/images/paypal_icon.svg';

export function icons(businessType) {
    switch (businessType) {
        case 'bar':
            return [bar1, bar2, bar3];
        case 'club':
            return [club1, club2, club3];
        case 'late_shop':
            return [late_shop1, late_shop2, late_shop3];
        case 'restaurant':
            return [restaurant1, restaurant2, restaurant3];
        case 'cafe':
            return [cafe1, cafe2, cafe3];
        default:
            return [service1, service2, service3];
    }
}

export {
    ownerPlaceholder,
    shopPlaceholder,
    payPalIcon,
    verifiedIcon,
    shareIcon,
}