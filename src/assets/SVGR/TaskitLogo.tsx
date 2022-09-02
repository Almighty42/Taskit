import * as React from "react"

const TaskitLogo = (props: any) => (
  <svg
    width={93}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 3.488c0-1.224 4.386-1.836 13.157-1.836 2.014 0 4.602.089 7.764.267 3.162.153 4.794.383 4.896.689-.051 1.147-1.11 1.721-3.175 1.721-.586 0-1.568-.064-2.945-.191-1.377-.128-2.562-.191-3.557-.191-.969 0-1.453.216-1.453.65 0 5.482-.127 13.654-.382 24.516-.536.383-1.326.574-2.372.574a180.33 180.33 0 0 1-.038-4.016l.191-16.523c0-1.989-.025-3.659-.076-5.01a23.13 23.13 0 0 0-2.104-.077c-.841 0-2.167.077-3.978.23-1.81.127-3.085.191-3.824.191C.7 4.482 0 4.151 0 3.488ZM34.113 17.983l-.191 4.399c0 2.218.255 3.71.765 4.475.306.51.726.765 1.262.765.153 0 .37-.039.65-.115.536-.153.982-.077 1.339.23-.179.892-1.071 1.338-2.678 1.338-1.096 0-1.823-.459-2.18-1.377-.28-.688-.484-1.543-.612-2.563-.127-1.045-.23-1.759-.306-2.141-1.657 3.162-3.263 5.087-4.819 5.775-.79.357-1.708.536-2.754.536-1.045 0-1.861-.498-2.447-1.492-.561-1.02-.842-2.499-.842-4.437 0-1.938.319-3.965.956-6.081.638-2.142 1.569-3.94 2.792-5.393 1.224-1.479 2.563-2.218 4.016-2.218 2.091 0 3.48.867 4.17 2.6.586 1.48.879 3.379.879 5.7Zm-9.37-1.224a36.054 36.054 0 0 0-.804 3.94c-.178 1.224-.267 2.32-.267 3.29 0 .943.19 1.758.573 2.447.408.688.93 1.033 1.568 1.033 1.377 0 2.703-1.3 3.978-3.902 1.275-2.6 1.912-5.023 1.912-7.267 0-1.453-.382-2.651-1.147-3.595-.51-.612-1.186-.918-2.027-.918-.816 0-1.568.485-2.257 1.454-.663.943-1.173 2.116-1.53 3.518ZM48.808 13.7c-.23-.587-.663-1.046-1.3-1.377-.638-.332-1.428-.498-2.372-.498-.943 0-1.835.281-2.677.842-.816.56-1.224 1.313-1.224 2.257 0 .943.383 1.695 1.148 2.256.79.536 1.734.944 2.83 1.224 1.122.28 2.244.587 3.366.918 1.122.306 2.065.829 2.83 1.568.79.714 1.186 1.657 1.186 2.83 0 1.709-.714 3.01-2.142 3.902-1.403.892-3.098 1.338-5.087 1.338-1.173 0-2.715-.319-4.628-.956-1.887-.637-2.83-1.402-2.83-2.295 0-.663.56-.994 1.683-.994.331 0 .765.204 1.3.612 1.632 1.198 3.302 1.797 5.01 1.797.918 0 1.709-.153 2.372-.459 1.224-.586 1.836-1.53 1.836-2.83 0-.79-.395-1.428-1.186-1.912-.765-.485-1.708-.867-2.83-1.148a93.713 93.713 0 0 1-3.328-.918c-1.122-.331-2.078-.88-2.868-1.644-.765-.79-1.148-1.785-1.148-2.984 0-1.555.701-2.817 2.104-3.786 1.402-.969 3.136-1.453 5.201-1.453 1.403 0 2.665.37 3.787 1.109 1.147.714 1.721 1.76 1.721 3.136 0 .918-.523 1.377-1.568 1.377-.434 0-.727-.076-.88-.23-.127-.152-.204-.42-.23-.803 0-.408-.025-.7-.076-.88ZM58.965.62c.025 1.784.038 3.123.038 4.015 0 .867-.013 1.734-.038 2.6 0 .868-.039 2.55-.115 5.05a464.376 464.376 0 0 0-.153 5.89c.969-.663 2.13-1.683 3.48-3.06a77.53 77.53 0 0 1 3.672-3.595c1.734-1.556 2.97-2.028 3.71-1.416.28.23.37.447.268.65-.255.536-.841 1.186-1.76 1.951-.892.765-1.95 1.632-3.174 2.601-1.224.969-2.193 1.861-2.907 2.677 1.862.255 3.353 1.3 4.475 3.137.485.841.956 1.682 1.415 2.524 1.173 2.218 2.448 3.723 3.825 4.513-.51.51-1.096.765-1.76.765-.662 0-1.325-.319-1.988-.956-.638-.638-1.199-1.415-1.683-2.333-.459-.918-.93-1.836-1.415-2.754-1.097-2.218-2.372-3.328-3.825-3.328-.688 0-1.275.23-1.76.689-.484.433-.726.892-.726 1.377 0 3.06-.051 5.329-.153 6.808-.357.484-.74.726-1.147.726a1.34 1.34 0 0 1-.421-.076c-.561-.23-.842-.701-.842-1.415l.23-6.502c.28-9.256.42-15.172.42-17.747 0-1.198.115-2.002.345-2.41.255-.407.548-.611.88-.611.356 0 .726.076 1.109.23ZM74.175 19.59c0-4.998.255-7.88.765-8.644.178-.28.395-.42.65-.42s.676.14 1.262.42a121.037 121.037 0 0 0-.191 7.076l.076 8.452c0 .79-.178 1.352-.535 1.683-.331.306-.65.459-.956.459-.28 0-.574-.076-.88-.23a231.845 231.845 0 0 1-.191-8.796ZM81.602 12.973c-1.147 0-1.925-.28-2.333-.841a1.1 1.1 0 0 1 .497-.957c.357-.23.74-.37 1.148-.42.408-.077 1.07-.14 1.989-.192.076-.688.114-1.568.114-2.639.026-1.096.052-2.027.077-2.792.076-2.014.382-3.25.918-3.71.23-.204.472-.306.727-.306.28 0 .522.026.726.077.077 1.836.115 2.945.115 3.327l-.23 5.737c.052.026.192.039.421.039l2.754-.115c1.989 0 2.983.306 2.983.918 0 .867-.357 1.377-1.07 1.53a5.336 5.336 0 0 1-1.186.114c-.434 0-1.007-.05-1.721-.153-.689-.127-1.186-.19-1.492-.19-.306 0-.51.012-.612.037-.077.74-.115 1.48-.115 2.219 0 .714.013 1.619.038 2.715.052 1.071.154 2.359.306 3.863.179 1.505.549 2.805 1.11 3.901.56 1.071 1.275 1.607 2.141 1.607.434 0 .944-.166 1.53-.497.587-.357 1.033-.536 1.34-.536.33 0 .611.077.84.23.255.127.383.28.383.459 0 .535-.548 1.058-1.645 1.568-1.07.484-1.989.726-2.753.726-2.805 0-4.552-2.651-5.24-7.955-.204-1.53-.357-4.156-.46-7.879a7.051 7.051 0 0 1-1.3.115ZM75.67 1.526c-.905 0-1.723.366-2.316.959a3.264 3.264 0 0 0-.959 2.315c0 .904.367 1.723.96 2.315.592.592 1.41.959 2.314.959.905 0 1.723-.367 2.316-.959.592-.592.958-1.41.958-2.315 0 0 0-.554-.25-1.204l1.22-.307c.3.843.3 1.54.3 1.54a4.508 4.508 0 0 1-1.322 3.193 4.508 4.508 0 0 1-3.193 1.322 4.508 4.508 0 0 1-3.194-1.322 4.509 4.509 0 0 1-1.321-3.194A4.509 4.509 0 0 1 75.698.313s1.18 0 2.327.661l-.629 1.055a3.745 3.745 0 0 0-1.727-.503Z"
      fill="#F5F5F5"
    />
    <path
      d="M73.903 5.227a.465.465 0 0 1-.117-.392.459.459 0 0 1 .114-.232l.023-.023a.46.46 0 0 1 .627-.008l.002.002c.126.12.34.319.48.443l.12.108 3.896-3.776s.197-.085.33-.085c.132 0 .23-.003.329.085.092.08.116.164.127.286.013.138-.096.342-.096.342L75.51 6.084a.449.449 0 0 1-.317.144h-.008a.467.467 0 0 1-.08-.005l-.007-.001a.474.474 0 0 1-.16-.058l-.003-.003a.473.473 0 0 1-.068-.049l-.004-.004a13.437 13.437 0 0 0-.328-.292c-.197-.17-.469-.416-.632-.588Z"
      fill="#F5F5F5"
    />
  </svg>
)

export default TaskitLogo