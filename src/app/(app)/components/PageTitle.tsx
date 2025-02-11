interface PageTitleProps {
  children: React.ReactNode; // タイトルのテキストや子要素
  className?: string; // 必要に応じて追加のクラスを渡す
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-3xl text-blue-300 mb-6 font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default PageTitle;
