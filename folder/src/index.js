import {checkUrl} from './checkUrl'
import { en, es, fr, ja, nl, ru, zh, getLangObject } from './getLang'
import './styles.css';

const showCurrentObj = () => getLangObject(checkUrl());
const LANG = showCurrentObj();
const URLARRAY = ['', 'https://apple.com/ ', 'https://google.com/ '];
let currentID = 0;

const HEADER = document.querySelector('header');
let tik = document.createElement('a');
tik.setAttribute("href", "#");
tik.classList.add('tik');
tik.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.74 0.259984C15.4346 -0.0453608 14.9396 -0.0453608 14.6342 0.259984L7.99997 6.89425L1.3657 0.259984C1.06036 -0.0453608 0.565298 -0.0453608 0.259953 0.259984C-0.0453913 0.565328 -0.0453913 1.06039 0.259953 1.36573L6.89422 8L0.259953 14.6343C-0.0453913 14.9396 -0.0453913 15.4347 0.259953 15.74C0.565298 16.0454 1.06036 16.0454 1.3657 15.74L7.99997 9.10575L14.6342 15.74C14.9396 16.0454 15.4346 16.0454 15.74 15.74C16.0453 15.4347 16.0453 14.9396 15.74 14.6343L9.10572 8L15.74 1.36573C16.0453 1.06039 16.0453 0.565328 15.74 0.259984Z" fill="white" fill-opacity="0.4"/>
</svg>`;
let headerText = document.createElement('a');
headerText.setAttribute("href", "#");
headerText.classList.add('header-text');
headerText.innerHTML = `${LANG['Restore']}`;
HEADER.append(tik, headerText);

const CONTENT = document.querySelector('#content');
let item1 = document.createElement('div');
let item2 = document.createElement('div');
let item3 = document.createElement('div');
item1.classList.add('content_item');
item2.classList.add('content_item');
item3.classList.add('content_item');

let item1Icon = document.createElement('div');
let item2Icon = document.createElement('div');
let item3Icon = document.createElement('div');
item1Icon.innerHTML = `<svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.16665 1.42474C9.31442 1.42474 11.2589 3.36919 13 7.25808C11.2589 11.147 9.31442 13.0914 7.16665 13.0914C3.94499 13.0914 1.33331 10.4797 1.33331 7.25808C1.33331 4.03642 3.94499 1.42474 7.16665 1.42474ZM18.8333 1.42474C22.055 1.42474 24.6666 4.03642 24.6666 7.25808C24.6666 10.4797 22.055 13.0914 18.8333 13.0914C16.6855 13.0914 14.7411 11.147 13 7.25808C14.7411 3.36919 16.6855 1.42474 18.8333 1.42474Z" stroke="white" stroke-width="2.25806"/>
</svg>`;
item2Icon.innerHTML = `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0123 1.39368L16.0422 14.2345L13.3068 11.4639C9.40047 12.3002 5.69677 14.8868 2.24892 19.3128L1.95069 19.6999L1.93598 19.5963C1.8089 18.5569 1.95513 17.3009 2.28732 15.9151L2.3742 15.566C3.16151 12.5112 4.80518 8.89196 7.69554 6.04199L4.80209 2.87284L18.0123 1.39368Z" stroke="white" stroke-width="2.25806"/>
</svg>`;
item3Icon.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66667 13.3584C2.311 13.3584 2.83333 13.8807 2.83333 14.5251V16.9394C2.83333 18.1695 3.83052 19.1667 5.06061 19.1667H7.62678C8.27111 19.1667 8.79344 19.689 8.79344 20.3333C8.79344 20.9777 8.27111 21.5 7.62678 21.5H5.06061C2.54185 21.5 0.5 19.4581 0.5 16.9394V14.5251C0.5 13.8807 1.02233 13.3584 1.66667 13.3584ZM20.3333 13.3118C20.9777 13.3118 21.5 13.8341 21.5 14.4785V16.9394C21.5 19.4581 19.4581 21.5 16.9394 21.5H14.4923C13.848 21.5 13.3257 20.9777 13.3257 20.3333C13.3257 19.689 13.848 19.1667 14.4923 19.1667H16.9394C18.1695 19.1667 19.1667 18.1695 19.1667 16.9394V14.4785C19.1667 13.8341 19.689 13.3118 20.3333 13.3118ZM16.9394 14.3939C17.408 14.3939 17.7879 14.7738 17.7879 15.2424C17.7879 15.711 17.408 16.0909 16.9394 16.0909H5.06061C4.592 16.0909 4.21212 15.711 4.21212 15.2424C4.21212 14.7738 4.592 14.3939 5.06061 14.3939H16.9394ZM16.9394 10.1515C17.408 10.1515 17.7879 10.5314 17.7879 11C17.7879 11.4686 17.408 11.8485 16.9394 11.8485H5.06061C4.592 11.8485 4.21212 11.4686 4.21212 11C4.21212 10.5314 4.592 10.1515 5.06061 10.1515H16.9394ZM16.9394 0.5C19.4581 0.5 21.5 2.54185 21.5 5.06061V8.50778C21.5 9.15211 20.9777 9.67445 20.3333 9.67445C19.689 9.67445 19.1667 9.15211 19.1667 8.50778V5.06061C19.1667 3.83052 18.1695 2.83333 16.9394 2.83333H14.4026C13.7583 2.83333 13.236 2.311 13.236 1.66667C13.236 1.02233 13.7583 0.5 14.4026 0.5H16.9394ZM7.60088 0.5C8.24521 0.5 8.76755 1.02233 8.76755 1.66667C8.76755 2.311 8.24521 2.83333 7.60088 2.83333H5.06061C3.83052 2.83333 2.83333 3.83052 2.83333 5.06061V7.67421C2.83333 8.31855 2.311 8.84088 1.66667 8.84088C1.02233 8.84088 0.5 8.31855 0.5 7.67421V5.06061C0.5 2.54185 2.54185 0.5 5.06061 0.5H7.60088ZM16.9394 5.90909C17.408 5.90909 17.7879 6.28897 17.7879 6.75758C17.7879 7.22618 17.408 7.60606 16.9394 7.60606H5.06061C4.592 7.60606 4.21212 7.22618 4.21212 6.75758C4.21212 6.28897 4.592 5.90909 5.06061 5.90909H16.9394Z" fill="white"/>
</svg>`;

let item1Text = document.createElement('div');
let item2Text = document.createElement('div');
let item3Text = document.createElement('div');
item1Text.classList.add('item1_text');
item2Text.classList.add('item2_text');
item3Text.classList.add('item3_text');
item1Text.innerHTML = `${LANG['Unlimited documents']}`;
item2Text.innerHTML = `${LANG['Count mode']}`;
item3Text.innerHTML = `${LANG['Text recognition (OCR)']}`;

item1.append(item1Icon, item1Text);
item2.append(item2Icon, item2Text);
item3.append(item3Icon, item3Text);
CONTENT.append(item1, item2, item3);

const H1 = document.querySelector('h1');
H1.innerHTML = `${LANG['Unlimited Access<br>to All Features']}`;

//sub
const SUB = document.querySelector('.sub');
const fields = document.querySelectorAll('.wrap')
const SUB1TITLE = document.querySelector('#sub1Title');
SUB1TITLE.innerHTML = `${LANG['Monthly']}`;
const SUB2TITLE = document.querySelector('#sub2Title');
SUB2TITLE.innerHTML = `${LANG['Annually']}`;

const SUB1PRICEBOTTOM = document.querySelector('#sub1PriceBottom');
SUB1PRICEBOTTOM.innerHTML = `${LANG['per month']}`;
const SUB2PRICEBOTTOM = document.querySelector('#sub2PriceBottom');
SUB2PRICEBOTTOM.innerHTML = `${LANG['per year']}`;

const SUB1WIDGET = document.querySelector('#sub1Widget');
SUB1WIDGET.innerHTML = `${LANG['3 DAYS FREE']}`;
const SUB2WIDGET = document.querySelector('#sub2Widget');
SUB2WIDGET.innerHTML = `${LANG['MOST POPULAR']}`;

const MONTH1 = document.querySelector('#month1');
MONTH1.innerHTML = `${LANG['month']}`;
const MONTH2 = document.querySelector('#month2');
MONTH2.innerHTML = `${LANG['month']}`

//btn
const BTN = document.querySelector('#btn');
BTN.innerHTML = `${LANG['Continue']}`;

const CANCEL = document.querySelector('.cancel');
CANCEL.innerHTML = `${LANG['Auto-renewable. Cancel anytime.']}`;

//footer
const FOOTER = document.querySelector('footer');
FOOTER.classList.add('footer');
let footerLeft = document.createElement('a');
footerLeft.classList.add('footer_text');
footerLeft.setAttribute("href", "#");
let footerRight = document.createElement('a');
footerRight.classList.add('footer_text');
footerRight.setAttribute("href", "#");

footerLeft.innerHTML = `${LANG['Terms of Use']}`;
footerRight.innerHTML = `${LANG['Privacy Policy']}`;
FOOTER.append(footerLeft, footerRight);


function chooseField (event) {
  let parrent = event.target.closest('.wrap');
  if (!parrent) return;
  if (parrent.classList.contains('active')) return;
  else {
    fields.forEach(el=>{el.classList.remove('active')});
    parrent.classList.add('active');
    currentID = parrent.id
  }
};

SUB.onclick = chooseField;
BTN.addEventListener('click', () => {window.location.href = `${URLARRAY[currentID]}`});
