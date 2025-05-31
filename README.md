## Glamour Haven Salon

```js
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ is_customer?: boolean } | null>(null);
  const [userRole, setUserRole] = useState<boolean>(true);

  useEffect(() => {
    const loadCookies = async () => {
      const tokenCookie = await getCookie("access_token");
      const userCookie = await getCookie("user");

      // Handle undefined values
      setToken(tokenCookie);

      if (userCookie) {
        try {
          const parsedUser = JSON.parse(userCookie);
          setUser(parsedUser);
          setUserRole(parsedUser?.is_customer ?? true);
        } catch (error) {
          console.error("Error parsing user cookie:", error);
          setUser(null);
          setUserRole(true);
        }
      } else {
        setUser(null);
        setUserRole(true);
      }
    };

    loadCookies();
  }, []);

```
