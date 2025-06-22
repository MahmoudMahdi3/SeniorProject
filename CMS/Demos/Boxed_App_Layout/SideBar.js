let HTMLSideBar = `<a href="index.html" class="sidebar-brand sidebar-brand-dark bg-primary-pickled-bluewood">
<span class="avatar avatar-xl sidebar-brand-icon h-auto">
    <span class="avatar-title rounded bg-primary"><img src="../../public/images/illustration/student/128/white.svg"
            class="img-fluid"
            alt="logo" /></span>
</span>
<span>Luma</span>
</a>

<div class="sidebar-heading">Student</div>
<ul class="sidebar-menu">

    <li class="sidebar-menu-item ">
        <a class="sidebar-menu-button"
            href="index.html">
            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">home</span>
            <span class="sidebar-menu-text">Home</span>
        </a>
    </li>
    <li class="sidebar-menu-item">
        <a class="sidebar-menu-button"
            href="courses.html">
            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">local_library</span>
            <span class="sidebar-menu-text">Portals</span>
        </a>
    </li>
    <li class="sidebar-menu-item">
        <a class="sidebar-menu-button"
            href="Trainers.html">
            <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">account_box</span>
            <span class="sidebar-menu-text">Trainers</span>
        </a>
    </li>

</ul>`;

document.getElementById("SideBarDiv").innerHTML = HTMLSideBar;

// Add active class based on current page URL
const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

document.querySelectorAll(".sidebar-menu-item").forEach(item => {
  const link = item.querySelector("a");
  if (!link) return;
  
  const href = link.getAttribute("href").toLowerCase();
  if (href === currentPage) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});
