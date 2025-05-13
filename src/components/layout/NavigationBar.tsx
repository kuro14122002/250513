// src/components/layout/NavigationBar.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
// SỬA Ở ĐÂY: Đổi tên import thành chữ thường 'menudata'
import { menuData, RecursiveMenuItem } from '@/config/menudata';
import { ChevronDown, Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavigationBarProps {
  currentLang: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { description?: string }
>(({ className, title, children, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {description && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>}
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem"


const NavigationBar: React.FC<NavigationBarProps> = ({ currentLang }) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const getLabel = (item: { labelVi: string, labelEn: string }) => {
    return currentLang === 'vi' ? item.labelVi : item.labelEn;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const renderMobileMenuItemsRecursive = (items: RecursiveMenuItem[], level: number = 0): JSX.Element[] => {
    const paddingClass = `pl-${4 + level * 4}`;

    return items.map(item => {
      if (item.isTitle) {
        return (
          <div key={item.id} className={cn("px-4 py-2 font-semibold text-primary dark:text-dseza-green-light", paddingClass)}>
            {getLabel(item)}
            {item.children && renderMobileMenuItemsRecursive(item.children, level + 1)}
          </div>
        );
      }
      if (item.children && item.children.length > 0) {
        return (
          <Collapsible key={item.id} className="w-full">
            <CollapsibleTrigger className={cn("w-full flex justify-between items-center text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700", paddingClass)}>
              {item.href ? ( <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex-grow" onClick={(e) => e.stopPropagation()}>{getLabel(item)}</a> ) : getLabel(item)}
              <ChevronDown size={16} className="collapsible-arrow transition-transform ml-2" />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-gray-50 dark:bg-gray-750">
              {renderMobileMenuItemsRecursive(item.children, level + 1)}
            </CollapsibleContent>
          </Collapsible>
        );
      }
      return (
        <li key={item.id}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className={cn("block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700", paddingClass)} onClick={() => setMobileMenuOpen(false)}>
            {getLabel(item)}
          </a>
        </li>
      );
    });
  };

  const renderDesktopSubMenuItems = (items: RecursiveMenuItem[]): JSX.Element => {
    const titleItems = items.filter(item => item.isTitle);

    return (
      <ul className={`grid gap-3 p-4 md:w-[600px] lg:w-[700px] ${titleItems.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
        {items.map((col) => (
          <li key={col.id} className="flex flex-col space-y-1">
            {col.isTitle && (
              <h3 className="text-sm font-medium text-primary dark:text-dseza-green-light mb-1 px-3 pt-1">
                {getLabel(col)}
              </h3>
            )}
            {col.children?.map(linkItem => (
              <ListItem
                key={linkItem.id}
                title={getLabel(linkItem)}
                href={linkItem.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.children && (
                  <ul className="pl-4 mt-1 text-xs">
                    {linkItem.children.map(grandChild => (
                      <li key={grandChild.id} className="py-0.5">
                        <a href={grandChild.href} target="_blank" rel="noopener noreferrer" className="hover:underline text-muted-foreground">
                          - {getLabel(grandChild)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </ListItem>
            ))}
             {!col.isTitle && !col.children && col.href && (
                <ListItem
                    key={col.id}
                    title={getLabel(col)}
                    href={col.href}
                    target="_blank"
                    rel="noopener noreferrer"
                />
             )}
          </li>
        ))}
      </ul>
    );
  };

  if (isMobile) {
    return (
      <div ref={navRef} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-40">
        <div className="container-custom mx-auto flex justify-between items-center py-2 px-4">
          <span className="font-semibold text-lg text-primary dark:text-dseza-green-light">Menu</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 dark:text-gray-200">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-2 max-h-[calc(100vh-120px)] overflow-y-auto">
            <ul className="flex flex-col">
              {renderMobileMenuItemsRecursive(menuData)}
              <li className="border-t border-gray-200 dark:border-gray-700">
                <a href="https://dseza.danang.gov.vn/lien-he/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {currentLang === 'vi' ? 'Liên hệ' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
      <NavigationMenu className="container-custom mx-auto max-w-none py-1">
        <NavigationMenuList className="justify-center">
          {menuData.map((item) => (
            <NavigationMenuItem key={item.id}>
              {item.children && item.children.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 dark:hover:bg-white/10 text-sm font-medium px-3 py-2 h-auto">
                    {getLabel(item)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderDesktopSubMenuItems(item.children)}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                   <a href={item.href} target="_blank" rel="noopener noreferrer" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 dark:hover:bg-white/10 text-sm font-medium px-3 py-2 h-auto")}>
                    {getLabel(item)}
                   </a>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <a href="https://dseza.danang.gov.vn/lien-he/" target="_blank" rel="noopener noreferrer" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 dark:hover:bg-white/10 text-sm font-medium px-3 py-2 h-auto")}>
                    {currentLang === 'vi' ? 'Liên hệ' : 'Contact'}
                </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;