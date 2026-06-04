import { writeFileSync, statSync } from "fs"
import  globby  from "globby"
import prettier from "prettier"
//SE0
const siteUrl = "https://yourwebsite.com"

async function generateSitemap() {
  const pages = await globby([
    "app/**/page.tsx",
    "!app/api/**",
    "!app/**/loading.tsx",
    "!app/**/error.tsx",
  ])

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    ${pages
      .map((page:any) => {
        const path = page
          .replace("app", "")
          .replace("/page.tsx", "")
          || "/"

        if (path.includes("[")) return ""

        const modDate = getFileModificationDate(page)

        return `
          <url>
            <loc>${siteUrl}${path}</loc>
            <lastmod>${modDate}</lastmod>
          </url>
        `
      })
      .join("")}

  </urlset>
  `

  const formatted = await prettier.format(sitemap, {
    parser: "html",
  })

  writeFileSync("public/sitemap.xml", formatted)

  console.log("✅ sitemap.xml generated")
}

function getFileModificationDate(filePath: string) {
  try {
    const stats = statSync(filePath)
    return stats.mtime.toISOString()
  } catch {
    return new Date().toISOString()
  
  }

  generateSitemap()
}