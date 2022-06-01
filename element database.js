//Mảng dữ liệu thẻ
let elementArr = [
  {
    id: "comment",
    name: "<!--(comment)-->",
    meaning: "Bình luận",
    example: "<!--This can be viewed in the HTML part of a document-->",
    browser: '<!--This can be viewed in the HTML part of a document-->',
  },
  {
    id: "a-tag",
    name: "<a>",
    meaning: "Anchor - Mỏ neo - Dẫn đường link",
    example: '<a href="/codic.html"> Visit Our Site</a>',
    browser: '<a href="/codic.html"> Visit Our Site</a>',
  },
  {
    id: "b-tag",
    name: "<b>",
    meaning: "Bold - In đậm",
    example: "<b>Example</b>",
    browser: '<b>Example</b>',
  },
  {
    id: "big-tag",
    name: "<big>",
    meaning: "Big (text) - Cỡ chữ to",
    example: "<big>Example</big>",
    browser: '<big>Example</big>',
  },
  {
    id: "body-tag",
    name: "<body>",
    meaning: "Body of HTML document - Thân bài",
    example: "<body>The content of your HTML page</body>",
    browser: '',
  },
  {
    id: "br-tag",
    name: "<br>",
    meaning: "Line break - Xuống dòng",
    example: "The contents of your page<br>The contents of your page",
    browser: '',
  },
  {
    id: "center-tag",
    name: "<center>",
    meaning: "Center - Căn giữa",
    example: "<center>This will center your contents</center>",
    browser: '',
  },
  {
    id: "dd-tag",
    name: "<dd>",
    meaning: "Definition description - Định nghĩa",
    example: "<dd>Definition of the term</dd>",
    browser: '',
  },
  {
    id: "dl-tag",
    name: "<dl>",
    meaning: "Definition list - Danh sách định nghĩa",
    example: "<dl>\n<dt>Definition Term</dt>\n<dd>Definition of the term</dd>\n</dl>",
    browser: '',
  },
  {
    id: "em-tag",
    name: "<em>",
    meaning: "Emphasis - In đậm và nhấn mạnh",
    example: "This is an <em>Example</em> of using the emphasis tag",
    browser: '',
  },
  {
    id: "font-tag",
    name: "<font>",
    meaning: "Font - Định dạng",
    example: '<font face="Times New Roman">Example</font>',
    browser: '',
  },
  // {
  //   name: "<form>",
  //   meaning: "Emphasis - In đậm và nhấn mạnh",
  //   example: '<form action="/action_page.php">
  //   <label for="fname">First name:</label><br>
  //   <input type="text" id="fname" name="fname" value="John"><br>
  //   <label for="lname">Last name:</label><br>
  //   <input type="text" id="lname" name="lname" value="Doe"><br><br>
  //   <input type="submit" value="Submit">
  //   </form>',
  //   browser: '',
  // },
  // {
  //   name: "<h1>
  //   <h2>
  //   <h3>
  //   <h4>
  //   <h5>
  //   <h6>",
  //   meaning: "Heading - Đầu mục",
  //   example: "<h1>Heading 1 Example</h1>
  //   <h2>Heading 2 Example</h2>
  //   <h3>Heading 3 Example</h3>
  //   <h4>Heading 4 Example</h4>
  //   <h5>Heading 5 Example</h5>
  //   <h6>Heading 6 Example</h6>",
  //   browser: '',
  // },
  // {
  //   name: "<head>",
  //   meaning: "Heading of HTML documen t - Phần mở đầu của HTML",
  //   example: "<head>Contains elements describing the document</head>",
  //   browser: '',
  // },
  // {
  //   name: "<hr/>",
  //   meaning: "Horizontal rule - Kẻ ngang từ điểm bắt đầu đến điểm kết thúc",
  //   example: "<hr/>",
  //   browser: '',
  // },
  // {
  //   name: "<html>",
  //   meaning: "Hypertext markup language - Ngôn ngữ đánh dấu siêu văn bản",
  //   example: "<html>
  //   <head>
  //   <meta>
  //   <title>Title of your web page</title>
  //   </head>
  //   <body>HTML web page contents
  //   </body>
  //   </html>",
  //   browser: '',
  // },
  // {
  //   name: "<i>",
  //   meaning: "Italic - In nghiêng",
  //   example: "<i>Example</i>",
  //   browser: '',
  // },
  // {
  //   name: "<img>",
  //   meaning: "Image - Chèn ảnh",
  //   example: '<img src="Earth.gif" width="41" height="41" border="0" alt="text describing the image" />',
  //   browser: '',
  // },
]

// xuất khẩu lao động object này
export {elementArr};