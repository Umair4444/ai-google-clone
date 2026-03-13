import { Sparkles } from "lucide-react";

const footerLinks = {
  Products: ["Nova Chat", "Nova Create", "Nova Code", "Nova Research"],
  Resources: ["Documentation", "API Reference", "Blog", "Community"],
  Company: ["About", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 mb-4">
            <a
              href="#"
              className="flex items-center gap-2 text-foreground mb-4"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base font-semibold tracking-tight">
                Nova AI
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making AI helpful, safe, and accessible for everyone.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nova AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
