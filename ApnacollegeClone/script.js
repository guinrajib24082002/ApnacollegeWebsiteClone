const newCoursesBtn = document.getElementById('newCoursesBtn');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    newCoursesBtn.addEventListener('click', () => {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });


    const dsaSheetBtn = document.getElementById('dsaSheetBtn');
    const popup1 = document.getElementById('popup1');
    const overlay1 = document.getElementById('overlay1');
    const closeBtn1 = document.getElementById('closeBtn1');

    dsaSheetBtn.addEventListener('click', () => {
      popup1.style.display = 'block';
      overlay.style.display = 'block';
    });

    closeBtn1.addEventListener('click', () => {
      popup1.style.display = 'none';
      overlay1.style.display = 'none';
    });

    overlay1.addEventListener('click', () => {
      popup1.style.display = 'none';
      overlay1.style.display = 'none';
    });    