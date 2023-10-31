import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TextDelete = (props) => (
  <Svg
    width={208}
    height={22}
    viewBox="0 0 208 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.36 3.54V8.2H7.44V9.7H2.36V14.5H8.04V16H0.54V2.04H8.04V3.54H2.36ZM12.6139 1.2V16H10.7939V1.2H12.6139ZM16.6558 3.26C16.3091 3.26 16.0158 3.14 15.7758 2.9C15.5358 2.66 15.4158 2.36667 15.4158 2.02C15.4158 1.67333 15.5358 1.38 15.7758 1.14C16.0158 0.899999 16.3091 0.779999 16.6558 0.779999C16.9891 0.779999 17.2691 0.899999 17.4958 1.14C17.7358 1.38 17.8558 1.67333 17.8558 2.02C17.8558 2.36667 17.7358 2.66 17.4958 2.9C17.2691 3.14 16.9891 3.26 16.6558 3.26ZM17.5358 5.04V16H15.7158V5.04H17.5358ZM33.8177 4.84C34.671 4.84 35.431 5.02 36.0977 5.38C36.7643 5.72667 37.291 6.25333 37.6777 6.96C38.0643 7.66667 38.2577 8.52667 38.2577 9.54V16H36.4577V9.8C36.4577 8.70667 36.1843 7.87333 35.6377 7.3C35.1043 6.71333 34.3777 6.42 33.4577 6.42C32.511 6.42 31.7577 6.72667 31.1977 7.34C30.6377 7.94 30.3577 8.81333 30.3577 9.96V16H28.5577V9.8C28.5577 8.70667 28.2843 7.87333 27.7377 7.3C27.2043 6.71333 26.4777 6.42 25.5577 6.42C24.611 6.42 23.8577 6.72667 23.2977 7.34C22.7377 7.94 22.4577 8.81333 22.4577 9.96V16H20.6377V5.04H22.4577V6.62C22.8177 6.04667 23.2977 5.60667 23.8977 5.3C24.511 4.99333 25.1843 4.84 25.9177 4.84C26.8377 4.84 27.651 5.04667 28.3577 5.46C29.0643 5.87333 29.591 6.48 29.9377 7.28C30.2443 6.50667 30.751 5.90667 31.4577 5.48C32.1643 5.05333 32.951 4.84 33.8177 4.84ZM42.1831 3.26C41.8365 3.26 41.5431 3.14 41.3031 2.9C41.0631 2.66 40.9431 2.36667 40.9431 2.02C40.9431 1.67333 41.0631 1.38 41.3031 1.14C41.5431 0.899999 41.8365 0.779999 42.1831 0.779999C42.5165 0.779999 42.7965 0.899999 43.0231 1.14C43.2631 1.38 43.3831 1.67333 43.3831 2.02C43.3831 2.36667 43.2631 2.66 43.0231 2.9C42.7965 3.14 42.5165 3.26 42.1831 3.26ZM43.0631 5.04V16H41.2431V5.04H43.0631ZM51.505 4.84C52.8383 4.84 53.9183 5.24667 54.745 6.06C55.5717 6.86 55.985 8.02 55.985 9.54V16H54.185V9.8C54.185 8.70667 53.9117 7.87333 53.365 7.3C52.8183 6.71333 52.0717 6.42 51.125 6.42C50.165 6.42 49.3983 6.72 48.825 7.32C48.265 7.92 47.985 8.79333 47.985 9.94V16H46.165V5.04H47.985V6.6C48.345 6.04 48.8317 5.60667 49.445 5.3C50.0717 4.99333 50.7583 4.84 51.505 4.84ZM58.278 10.48C58.278 9.36 58.5046 8.38 58.958 7.54C59.4113 6.68667 60.0313 6.02667 60.818 5.56C61.618 5.09333 62.5046 4.86 63.478 4.86C64.438 4.86 65.2713 5.06667 65.978 5.48C66.6846 5.89333 67.2113 6.41333 67.558 7.04V5.04H69.398V16H67.558V13.96C67.198 14.6 66.658 15.1333 65.938 15.56C65.2313 15.9733 64.4046 16.18 63.458 16.18C62.4846 16.18 61.6046 15.94 60.818 15.46C60.0313 14.98 59.4113 14.3067 58.958 13.44C58.5046 12.5733 58.278 11.5867 58.278 10.48ZM67.558 10.5C67.558 9.67333 67.3913 8.95333 67.058 8.34C66.7246 7.72667 66.2713 7.26 65.698 6.94C65.138 6.60667 64.518 6.44 63.838 6.44C63.158 6.44 62.538 6.6 61.978 6.92C61.418 7.24 60.9713 7.70667 60.638 8.32C60.3046 8.93333 60.138 9.65333 60.138 10.48C60.138 11.32 60.3046 12.0533 60.638 12.68C60.9713 13.2933 61.418 13.7667 61.978 14.1C62.538 14.42 63.158 14.58 63.838 14.58C64.518 14.58 65.138 14.42 65.698 14.1C66.2713 13.7667 66.7246 13.2933 67.058 12.68C67.3913 12.0533 67.558 11.3267 67.558 10.5ZM74.2936 6.82C74.6136 6.19333 75.0669 5.70667 75.6536 5.36C76.2536 5.01333 76.9803 4.84 77.8336 4.84V6.72H77.3536C75.3136 6.72 74.2936 7.82667 74.2936 10.04V16H72.4736V5.04H74.2936V6.82ZM89.7266 6.54H87.4266V16H85.6066V6.54H84.1866V5.04H85.6066V4.26C85.6066 3.03333 85.9199 2.14 86.5466 1.58C87.1866 1.00667 88.2066 0.719999 89.6066 0.719999V2.24C88.8066 2.24 88.2399 2.4 87.9066 2.72C87.5866 3.02667 87.4266 3.54 87.4266 4.26V5.04H89.7266V6.54ZM96.6286 16.18C95.6019 16.18 94.6686 15.9467 93.8286 15.48C93.0019 15.0133 92.3486 14.3533 91.8686 13.5C91.4019 12.6333 91.1686 11.6333 91.1686 10.5C91.1686 9.38 91.4086 8.39333 91.8886 7.54C92.3819 6.67333 93.0486 6.01333 93.8886 5.56C94.7286 5.09333 95.6686 4.86 96.7086 4.86C97.7486 4.86 98.6886 5.09333 99.5286 5.56C100.369 6.01333 101.029 6.66667 101.509 7.52C102.002 8.37333 102.249 9.36667 102.249 10.5C102.249 11.6333 101.995 12.6333 101.489 13.5C100.995 14.3533 100.322 15.0133 99.4686 15.48C98.6153 15.9467 97.6686 16.18 96.6286 16.18ZM96.6286 14.58C97.2819 14.58 97.8953 14.4267 98.4686 14.12C99.0419 13.8133 99.5019 13.3533 99.8486 12.74C100.209 12.1267 100.389 11.38 100.389 10.5C100.389 9.62 100.215 8.87333 99.8686 8.26C99.5219 7.64667 99.0686 7.19333 98.5086 6.9C97.9486 6.59333 97.3419 6.44 96.6886 6.44C96.0219 6.44 95.4086 6.59333 94.8486 6.9C94.3019 7.19333 93.8619 7.64667 93.5286 8.26C93.1953 8.87333 93.0286 9.62 93.0286 10.5C93.0286 11.3933 93.1886 12.1467 93.5086 12.76C93.8419 13.3733 94.2819 13.8333 94.8286 14.14C95.3753 14.4333 95.9753 14.58 96.6286 14.58ZM106.862 6.54V13C106.862 13.5333 106.975 13.9133 107.202 14.14C107.428 14.3533 107.822 14.46 108.382 14.46H109.722V16H108.082C107.068 16 106.308 15.7667 105.802 15.3C105.295 14.8333 105.042 14.0667 105.042 13V6.54H103.622V5.04H105.042V2.28H106.862V5.04H109.722V6.54H106.862ZM116.707 16.18C115.68 16.18 114.747 15.9467 113.907 15.48C113.08 15.0133 112.427 14.3533 111.947 13.5C111.48 12.6333 111.247 11.6333 111.247 10.5C111.247 9.38 111.487 8.39333 111.967 7.54C112.46 6.67333 113.127 6.01333 113.967 5.56C114.807 5.09333 115.747 4.86 116.787 4.86C117.827 4.86 118.767 5.09333 119.607 5.56C120.447 6.01333 121.107 6.66667 121.587 7.52C122.08 8.37333 122.327 9.36667 122.327 10.5C122.327 11.6333 122.073 12.6333 121.567 13.5C121.073 14.3533 120.4 15.0133 119.547 15.48C118.693 15.9467 117.747 16.18 116.707 16.18ZM116.707 14.58C117.36 14.58 117.973 14.4267 118.547 14.12C119.12 13.8133 119.58 13.3533 119.927 12.74C120.287 12.1267 120.467 11.38 120.467 10.5C120.467 9.62 120.293 8.87333 119.947 8.26C119.6 7.64667 119.147 7.19333 118.587 6.9C118.027 6.59333 117.42 6.44 116.767 6.44C116.1 6.44 115.487 6.59333 114.927 6.9C114.38 7.19333 113.94 7.64667 113.607 8.26C113.273 8.87333 113.107 9.62 113.107 10.5C113.107 11.3933 113.267 12.1467 113.587 12.76C113.92 13.3733 114.36 13.8333 114.907 14.14C115.453 14.4333 116.053 14.58 116.707 14.58ZM129.372 10.48C129.372 9.36 129.598 8.38 130.052 7.54C130.505 6.68667 131.125 6.02667 131.912 5.56C132.712 5.09333 133.605 4.86 134.592 4.86C135.445 4.86 136.238 5.06 136.972 5.46C137.705 5.84667 138.265 6.36 138.652 7V1.2H140.492V16H138.652V13.94C138.292 14.5933 137.758 15.1333 137.052 15.56C136.345 15.9733 135.518 16.18 134.572 16.18C133.598 16.18 132.712 15.94 131.912 15.46C131.125 14.98 130.505 14.3067 130.052 13.44C129.598 12.5733 129.372 11.5867 129.372 10.48ZM138.652 10.5C138.652 9.67333 138.485 8.95333 138.152 8.34C137.818 7.72667 137.365 7.26 136.792 6.94C136.232 6.60667 135.612 6.44 134.932 6.44C134.252 6.44 133.632 6.6 133.072 6.92C132.512 7.24 132.065 7.70667 131.732 8.32C131.398 8.93333 131.232 9.65333 131.232 10.48C131.232 11.32 131.398 12.0533 131.732 12.68C132.065 13.2933 132.512 13.7667 133.072 14.1C133.632 14.42 134.252 14.58 134.932 14.58C135.612 14.58 136.232 14.42 136.792 14.1C137.365 13.7667 137.818 13.2933 138.152 12.68C138.485 12.0533 138.652 11.3267 138.652 10.5ZM153.567 10.1C153.567 10.4467 153.547 10.8133 153.507 11.2H144.747C144.814 12.28 145.181 13.1267 145.847 13.74C146.527 14.34 147.347 14.64 148.307 14.64C149.094 14.64 149.747 14.46 150.267 14.1C150.801 13.7267 151.174 13.2333 151.387 12.62H153.347C153.054 13.6733 152.467 14.5333 151.587 15.2C150.707 15.8533 149.614 16.18 148.307 16.18C147.267 16.18 146.334 15.9467 145.507 15.48C144.694 15.0133 144.054 14.3533 143.587 13.5C143.121 12.6333 142.887 11.6333 142.887 10.5C142.887 9.36667 143.114 8.37333 143.567 7.52C144.021 6.66667 144.654 6.01333 145.467 5.56C146.294 5.09333 147.241 4.86 148.307 4.86C149.347 4.86 150.267 5.08667 151.067 5.54C151.867 5.99333 152.481 6.62 152.907 7.42C153.347 8.20667 153.567 9.1 153.567 10.1ZM151.687 9.72C151.687 9.02667 151.534 8.43333 151.227 7.94C150.921 7.43333 150.501 7.05333 149.967 6.8C149.447 6.53333 148.867 6.4 148.227 6.4C147.307 6.4 146.521 6.69333 145.867 7.28C145.227 7.86667 144.861 8.68 144.767 9.72H151.687ZM163.122 7.06C163.482 6.43333 164.015 5.91333 164.722 5.5C165.442 5.07333 166.275 4.86 167.222 4.86C168.195 4.86 169.075 5.09333 169.862 5.56C170.662 6.02667 171.288 6.68667 171.742 7.54C172.195 8.38 172.422 9.36 172.422 10.48C172.422 11.5867 172.195 12.5733 171.742 13.44C171.288 14.3067 170.662 14.98 169.862 15.46C169.075 15.94 168.195 16.18 167.222 16.18C166.288 16.18 165.462 15.9733 164.742 15.56C164.035 15.1333 163.495 14.6067 163.122 13.98V21.2H161.302V5.04H163.122V7.06ZM170.562 10.48C170.562 9.65333 170.395 8.93333 170.062 8.32C169.728 7.70667 169.275 7.24 168.702 6.92C168.142 6.6 167.522 6.44 166.842 6.44C166.175 6.44 165.555 6.60667 164.982 6.94C164.422 7.26 163.968 7.73333 163.622 8.36C163.288 8.97333 163.122 9.68667 163.122 10.5C163.122 11.3267 163.288 12.0533 163.622 12.68C163.968 13.2933 164.422 13.7667 164.982 14.1C165.555 14.42 166.175 14.58 166.842 14.58C167.522 14.58 168.142 14.42 168.702 14.1C169.275 13.7667 169.728 13.2933 170.062 12.68C170.395 12.0533 170.562 11.32 170.562 10.48ZM184.817 10.1C184.817 10.4467 184.797 10.8133 184.757 11.2H175.997C176.064 12.28 176.431 13.1267 177.097 13.74C177.777 14.34 178.597 14.64 179.557 14.64C180.344 14.64 180.997 14.46 181.517 14.1C182.051 13.7267 182.424 13.2333 182.637 12.62H184.597C184.304 13.6733 183.717 14.5333 182.837 15.2C181.957 15.8533 180.864 16.18 179.557 16.18C178.517 16.18 177.584 15.9467 176.757 15.48C175.944 15.0133 175.304 14.3533 174.837 13.5C174.371 12.6333 174.137 11.6333 174.137 10.5C174.137 9.36667 174.364 8.37333 174.817 7.52C175.271 6.66667 175.904 6.01333 176.717 5.56C177.544 5.09333 178.491 4.86 179.557 4.86C180.597 4.86 181.517 5.08667 182.317 5.54C183.117 5.99333 183.731 6.62 184.157 7.42C184.597 8.20667 184.817 9.1 184.817 10.1ZM182.937 9.72C182.937 9.02667 182.784 8.43333 182.477 7.94C182.171 7.43333 181.751 7.05333 181.217 6.8C180.697 6.53333 180.117 6.4 179.477 6.4C178.557 6.4 177.771 6.69333 177.117 7.28C176.477 7.86667 176.111 8.68 176.017 9.72H182.937ZM189.04 6.82C189.36 6.19333 189.813 5.70667 190.4 5.36C191 5.01333 191.726 4.84 192.58 4.84V6.72H192.1C190.06 6.72 189.04 7.82667 189.04 10.04V16H187.22V5.04H189.04V6.82ZM199.141 6.54H196.841V16H195.021V6.54H193.601V5.04H195.021V4.26C195.021 3.03333 195.334 2.14 195.961 1.58C196.601 1.00667 197.621 0.719999 199.021 0.719999V2.24C198.221 2.24 197.654 2.4 197.321 2.72C197.001 3.02667 196.841 3.54 196.841 4.26V5.04H199.141V6.54ZM202.203 3.26C201.856 3.26 201.563 3.14 201.323 2.9C201.083 2.66 200.963 2.36667 200.963 2.02C200.963 1.67333 201.083 1.38 201.323 1.14C201.563 0.899999 201.856 0.779999 202.203 0.779999C202.536 0.779999 202.816 0.899999 203.043 1.14C203.283 1.38 203.403 1.67333 203.403 2.02C203.403 2.36667 203.283 2.66 203.043 2.9C202.816 3.14 202.536 3.26 202.203 3.26ZM203.083 5.04V16H201.263V5.04H203.083ZM208.005 1.2V16H206.185V1.2H208.005Z"
      fill="#E4E4E4"
    />
  </Svg>
);
export default TextDelete;
