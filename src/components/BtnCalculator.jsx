import React, { useState } from 'react';

export default function Btn() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [lastMath, setLastMath] = useState(false);
  const [message, setMessage] = useState(''); // نمایش جمله تصادفی

const randomMessages = {
  1: ['بزن برو جلو مرد !'],
  2: ['یه دونه میزنیم! 🌟، برو جلو داداش، به نظرم می‌ری روی ماه! 😎', 'وای! این شد، هنوزم شک دارم! 😂', 'شد؟ پسر با استعدادی هستی، همینطوری پیش برو! 🚀', 'داداش، شد! دیگه همه ما رو میشناسن! 😜'],
  3: ['شد؟! بزن بریم، اینا دیگه کارشون حرفه‌ای شده! 🔥', 'واو! شد! با این سرعت ممکنه به فضا هم برسیم! 🌌', 'شدی! این دیگه خیلی خفن بود! 😏', 'شد؟ به نظرم رو پرچم بنویس! 👏'],
  4: ['چه جالب! شدیم، دیگه از این به بعد حواست باشه! 😎', 'آفرین! این شد! دیگه واقعا جدی شدی! 🏅', 'چه خوب! حالا شدی! رسیدیم به حرفه‌ای ها! 🚀', 'چرا به راضی شدی؟ من می‌خواستم بیشتر! 🤩'],
  5: ['خب باید از الآن سراغ خودروی برقی بریم! 🚗', 'دیگر اینجا هیچ چیز برای ما غیرممکن نیست! 🔥', 'همینه دیگه! دیگه همه رو شگفت‌زده کردی! 😎', 'داداش، دیگه بقیه بهت حسود میشن! 💪'],
  6: ['آفرین، داری رکورد می‌زنی! 🏆', 'دیگه باید با خودت یکی از فضاپیمای ناسا رو دعوت کنی! 🚀', 'واو! مثل این که داری فرمول ساختن پول رو پیدا می‌کنی! 💸', 'عجب کار بزرگی کردی! 👏'],
  7: ['دیگر داریم توی جهانی دیگه زندگی می‌کنیم! 😜', 'حالا دیگه برو و رویاها رو واقعیت کن! 🌟', 'این یکی شد! دیگه شجاعت رو از دست ندادی! 💥', 'به نظرم باید کلاه بزنیم به افتخار تو! 👏'],
  8: ['آفرین! دیگه این عدد برای تو خیلی ساده شده! 😎', 'دیگه حسابی رو بوم رسیدیم! 🚀', 'عالی، این کار رو مثل حرفه‌ای‌ها انجام دادی! 🏅', 'چه جالب! دیگه هیچ چیزی نمیتونه جلوی ما رو بگیره! 💥'],
  9: ['عدد؟ همه یه شوک به خودشون میزنن! 😱', 'واو! همینطوری رکورد می‌زنی! 😏', 'این دیگه چیزی شبیه معجزه بود! 😜', 'تو خودت یک افسانه‌ای! 💪'],
  10: ['شک ندارم، تو همون فردی هستی که روزی به دنیا تغییری خواهی داد! 🌍', 'این دیگه هنر واقعی است! 😍', 'حالا منم باید فکر کنم چطور به تو برسیم! 🏁', 'این دیگه شاهکار بود! 💥'],
  11: ['آفرین به خودت! 😎', 'حالا اینا دیگه اصلاً به تو میچسبه! 🤩', 'به نظر من با این سرعت به زودی باید ستاره بشی! 🌟', 'حالا از نظر من تو داریم تو دنیای خودت می‌درخشی! 🔥'],
  12: ['حالا دیگه فقط باید چشم‌هات رو باز کنی و ببینی چطور هرچی می‌خوای به دست میاری! 😜', 'این دیگه برای تو خیلی معمولی شده! 😎', 'شجاعتت اصلاً قابل تحسینه! 🏅', 'میشه این رو هم به حساب خودت نوشت! 💪'],
  13: ['خیلی عالی پیش می‌ری! 😍', 'این باید رکورد رو بشکنی! 🔥', 'دیگه هیچ چیز نمی‌تونه جلوی شما رو بگیره! 💥', 'عالیه! خیلی خوشحالم که اینجایی! 🏆']
};


  const handleButtonClick = (value) => {
    if (lastMath && !isNaN(value)) {
      setInput(value);
    } else {
      setInput(input + value);
    }
    setLastMath(false);

    // نمایش جمله تصادفی بر اساس تعداد ارقام
    const inputLength = input.length + 1; // برای در نظر گرفتن دکمه فعلی که زده می‌شود
    if (randomMessages[inputLength]) {
      const randomIndex = Math.floor(Math.random() * randomMessages[inputLength].length);
      setMessage(randomMessages[inputLength][randomIndex]);
    }
  };

  const handleEvaluate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setInput(evalResult.toString());
      setLastMath(true);
      setMessage('اینم نتیجه! 😁'); // اضافه کردن پیام پس از محاسبه
    } catch (error) {
      setResult(error);
      setMessage('اوops! یه چیزی اشتباه رفت. 😅');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
    setMessage(''); // حذف جمله تصادفی هنگام پاک کردن
    setLastMath(false);
  };

  const handleRadical = () => {
    try {
      setResult(Math.sqrt(eval(input)));
      setInput(Math.sqrt(eval(input)).toString());
      setLastMath(true);
    } catch (error) {
      setResult(error);
    }
  };

  const handleExponentiation = () => {
    try {
      const [base, exponent] = input.split('^');
      setResult(Math.pow(eval(base), eval(exponent)));
      setInput(Math.pow(eval(base), eval(exponent)).toString());
      setLastMath(true);
    } catch (error) {
      setResult(error);
    }
  };

  const handlePercentage = () => {
    try {
      setResult(eval(input) / 100);
      setInput((eval(input) / 100).toString());
      setLastMath(true);
    } catch (error) {
      setResult(error);
    }
  };

  const handlePi = () => {
    setInput(input + Math.PI.toString());
  };

  const handleFactorial = () => {
    try {
      const num = eval(input);
      const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
      setResult(factorial(num));
      setInput(factorial(num).toString());
      setLastMath(true);
    } catch (error) {
      setResult(error);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || result || '0'}
        <div className="message">{message}</div> {/* نمایش جمله تصادفی */}
      </div>
      <div className="calculator-buttons">
        <button className="button clear" onClick={handleClear}>AC</button>
        <button className="button operator divide" onClick={handlePercentage}>%</button>
        <button className="button operator radical" onClick={handleRadical}>√</button>
        <button className="button operator divide" onClick={() => handleButtonClick('/')}>/</button>

        <button className="button seven" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button eight" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button nine" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operator multiply" onClick={() => handleButtonClick('*')}>×</button>

        <button className="button four" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button five" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button six" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operator minus" onClick={() => handleButtonClick('-')}>−</button>

        <button className="button one" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button two" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button three" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operator plus" onClick={() => handleButtonClick('+')}>+</button>

        <button className="button zero" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button dot" onClick={() => handleButtonClick('.')}>.</button>

        <button className="button equals" onClick={handleEvaluate}>=</button>

        <button className="button operator pi" onClick={handlePi}>π</button>
        <button className="button operator factorial" onClick={handleFactorial}>x!</button>
        <button className="button operator exponentiation" onClick={() => handleButtonClick('^')}>^</button>

      </div>
    </div>
  );
}
