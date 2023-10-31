import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Genders = (props) => (
  <Svg
    width={52}
    height={21}
    viewBox="0 0 52 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.47 8.07C8.19933 7.50067 7.80733 7.062 7.294 6.754C6.78067 6.43667 6.18333 6.278 5.502 6.278C4.82067 6.278 4.20467 6.43667 3.654 6.754C3.11267 7.062 2.68333 7.51 2.366 8.098C2.058 8.67667 1.904 9.34867 1.904 10.114C1.904 10.8793 2.058 11.5513 2.366 12.13C2.68333 12.7087 3.11267 13.1567 3.654 13.474C4.20467 13.782 4.82067 13.936 5.502 13.936C6.454 13.936 7.238 13.6513 7.854 13.082C8.47 12.5127 8.82933 11.7427 8.932 10.772H5.04V9.736H10.29V10.716C10.2153 11.5187 9.96333 12.256 9.534 12.928C9.10467 13.5907 8.54 14.118 7.84 14.51C7.14 14.8927 6.36067 15.084 5.502 15.084C4.59667 15.084 3.77067 14.874 3.024 14.454C2.27733 14.0247 1.68467 13.432 1.246 12.676C0.816667 11.92 0.602 11.066 0.602 10.114C0.602 9.162 0.816667 8.308 1.246 7.552C1.68467 6.78667 2.27733 6.194 3.024 5.774C3.77067 5.34467 4.59667 5.13 5.502 5.13C6.538 5.13 7.45267 5.38667 8.246 5.9C9.04867 6.41333 9.632 7.13667 9.996 8.07H8.47ZM18.9745 10.87C18.9745 11.1127 18.9605 11.3693 18.9325 11.64H12.8005C12.8472 12.396 13.1038 12.9887 13.5705 13.418C14.0465 13.838 14.6205 14.048 15.2925 14.048C15.8432 14.048 16.3005 13.922 16.6645 13.67C17.0378 13.4087 17.2992 13.0633 17.4485 12.634H18.8205C18.6152 13.3713 18.2045 13.9733 17.5885 14.44C16.9725 14.8973 16.2072 15.126 15.2925 15.126C14.5645 15.126 13.9112 14.9627 13.3325 14.636C12.7632 14.3093 12.3152 13.8473 11.9885 13.25C11.6618 12.6433 11.4985 11.9433 11.4985 11.15C11.4985 10.3567 11.6572 9.66133 11.9745 9.064C12.2918 8.46667 12.7352 8.00933 13.3045 7.692C13.8832 7.36533 14.5458 7.202 15.2925 7.202C16.0205 7.202 16.6645 7.36067 17.2245 7.678C17.7845 7.99533 18.2138 8.434 18.5125 8.994C18.8205 9.54467 18.9745 10.17 18.9745 10.87ZM17.6585 10.604C17.6585 10.1187 17.5512 9.70333 17.3365 9.358C17.1218 9.00333 16.8278 8.73733 16.4545 8.56C16.0905 8.37333 15.6845 8.28 15.2365 8.28C14.5925 8.28 14.0418 8.48533 13.5845 8.896C13.1365 9.30667 12.8798 9.876 12.8145 10.604H17.6585ZM16.6085 5.158L13.6265 6.754V5.802L16.6085 4.052V5.158ZM24.3941 7.188C25.3275 7.188 26.0835 7.47267 26.6621 8.042C27.2408 8.602 27.5301 9.414 27.5301 10.478V15H26.2701V10.66C26.2701 9.89467 26.0788 9.31133 25.6961 8.91C25.3135 8.49933 24.7908 8.294 24.1281 8.294C23.4561 8.294 22.9195 8.504 22.5181 8.924C22.1261 9.344 21.9301 9.95533 21.9301 10.758V15H20.6561V7.328H21.9301V8.42C22.1821 8.028 22.5228 7.72467 22.9521 7.51C23.3908 7.29533 23.8715 7.188 24.3941 7.188ZM36.6112 10.87C36.6112 11.1127 36.5972 11.3693 36.5692 11.64H30.4372C30.4839 12.396 30.7405 12.9887 31.2072 13.418C31.6832 13.838 32.2572 14.048 32.9292 14.048C33.4799 14.048 33.9372 13.922 34.3012 13.67C34.6745 13.4087 34.9359 13.0633 35.0852 12.634H36.4572C36.2519 13.3713 35.8412 13.9733 35.2252 14.44C34.6092 14.8973 33.8439 15.126 32.9292 15.126C32.2012 15.126 31.5479 14.9627 30.9692 14.636C30.3999 14.3093 29.9519 13.8473 29.6252 13.25C29.2985 12.6433 29.1352 11.9433 29.1352 11.15C29.1352 10.3567 29.2939 9.66133 29.6112 9.064C29.9285 8.46667 30.3719 8.00933 30.9412 7.692C31.5199 7.36533 32.1825 7.202 32.9292 7.202C33.6572 7.202 34.3012 7.36067 34.8612 7.678C35.4212 7.99533 35.8505 8.434 36.1492 8.994C36.4572 9.54467 36.6112 10.17 36.6112 10.87ZM35.2952 10.604C35.2952 10.1187 35.1879 9.70333 34.9732 9.358C34.7585 9.00333 34.4645 8.73733 34.0912 8.56C33.7272 8.37333 33.3212 8.28 32.8732 8.28C32.2292 8.28 31.6785 8.48533 31.2212 8.896C30.7732 9.30667 30.5165 9.876 30.4512 10.604H35.2952ZM39.5668 8.574C39.7908 8.13533 40.1082 7.79467 40.5188 7.552C40.9388 7.30933 41.4475 7.188 42.0448 7.188V8.504H41.7088C40.2808 8.504 39.5668 9.27867 39.5668 10.828V15H38.2928V7.328H39.5668V8.574ZM46.8615 15.126C46.1428 15.126 45.4895 14.9627 44.9015 14.636C44.3228 14.3093 43.8655 13.8473 43.5295 13.25C43.2028 12.6433 43.0395 11.9433 43.0395 11.15C43.0395 10.366 43.2075 9.67533 43.5435 9.078C43.8888 8.47133 44.3555 8.00933 44.9435 7.692C45.5315 7.36533 46.1895 7.202 46.9175 7.202C47.6455 7.202 48.3035 7.36533 48.8915 7.692C49.4795 8.00933 49.9415 8.46667 50.2775 9.064C50.6228 9.66133 50.7955 10.3567 50.7955 11.15C50.7955 11.9433 50.6182 12.6433 50.2635 13.25C49.9182 13.8473 49.4468 14.3093 48.8495 14.636C48.2522 14.9627 47.5895 15.126 46.8615 15.126ZM46.8615 14.006C47.3188 14.006 47.7482 13.8987 48.1495 13.684C48.5508 13.4693 48.8728 13.1473 49.1155 12.718C49.3675 12.2887 49.4935 11.766 49.4935 11.15C49.4935 10.534 49.3722 10.0113 49.1295 9.582C48.8868 9.15267 48.5695 8.83533 48.1775 8.63C47.7855 8.41533 47.3608 8.308 46.9035 8.308C46.4368 8.308 46.0075 8.41533 45.6155 8.63C45.2328 8.83533 44.9248 9.15267 44.6915 9.582C44.4582 10.0113 44.3415 10.534 44.3415 11.15C44.3415 11.7753 44.4535 12.3027 44.6775 12.732C44.9108 13.1613 45.2188 13.4833 45.6015 13.698C45.9842 13.9033 46.4042 14.006 46.8615 14.006Z"
      fill="#E4E4E4"
    />
  </Svg>
);
export default Genders;