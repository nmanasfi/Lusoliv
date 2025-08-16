export default function Footer(){
  return (<footer className="border-t border-olive-100 py-10 mt-10">
    <div className="container-narrow text-sm text-olive-700 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div>© {new Date().getFullYear()} Lusoliv, Lda. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <a href="#top" className="hover:text-olive-900">Back to top</a>
        <a href="/privacy" className="hover:text-olive-900">Privacy</a>
      </div>
    </div>
  </footer>);
}
