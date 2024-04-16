import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tourism" },
    {
      name: "description",
      content:
        "金沢工業大学のサークル、Tourismです。以前は非公認プロジェクトとして存在していましたが、2024年度からサークルとなりました！やりたいことを見つけて、好きなようにモノを作っていく。そんな学生生活をさらに楽しく彩るサークルです。",
    },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Welcome to
        <br />
        Tourism!
      </h1>
      <main
        style={{
          backgroundColor: "lightgoldenrodyellow",
          borderRadius: "1.3rem",
          borderColor: "black",
          border: "1px solid",
          marginLeft: "1.35rem",
          marginRight: "1.35rem",
        }}
      >
        <h2 style={{ textAlign: "center" }}>どんなサークル？</h2>
        <ul style={{ marginRight: "1.5rem", marginLeft: "1.5rem" }}>
          <li>金沢工業大学内のサークル</li>
          <li>情報工学科の学生がメンバーの多くを占める</li>
          <li>
            元々は非公認プロジェクトとして湯涌温泉に訪れた
            <br />
            観光客に向けたアプリケーション開発をしてた
          </li>
          <li>
            現在は、学生のやりたいことを見つける環境を
            <br />
            作っていくために、 学年を越えた交流の場として
            <br />
            サークル活動をしている
          </li>
          <li>
            他部や他サークル、他プロジェクトとの兼業OK！
            <br />
            むしろ推奨しています！
          </li>
        </ul>
      </main>
    </div>
  );
}
