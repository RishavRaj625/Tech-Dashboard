export const reactReadme = {
  title: "React Comprehensive Guide 🚀",
  description:
    "A complete guide covering React, React Native, Routing, and Functions with practical examples for beginners and quick revision.",
  sections: [
    {
      title: "Table of Contents",
      code: `
            Getting Started
            React Fundamentals
            Components
            Props and State
            Event Handling
            Conditional Rendering
            Lists and Keys
            Forms and Controlled Components
            React Hooks
            Context API
            React Router
            React Native Basics
            Common Patterns
            Best Practices `,
    },
    {
      title: "Getting Started",
      content:
        "Prerequisites: Basic knowledge of HTML, CSS, and JavaScript, and Node.js installed on your machine.",
      code: `# Create a new React app
npx create-react-app my-react-app
cd my-react-app
npm start

# Or using Vite (faster alternative)
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`,
    },
    {
      title: "React Fundamentals",
      content:
        "React is a JavaScript library for building user interfaces, particularly web applications. It allows you to create reusable UI components and manage application state efficiently. Key concepts include Component-Based architecture, Virtual DOM, One-Way Data Flow, and Declarative programming.",
      code: `// React creates an in-memory virtual representation of the real DOM
// Data flows down from parent to child components
// Describe what the UI should look like for any given state

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
    },
    {
      title: "Components",
      content:
        "Components are the building blocks of React applications. They can be functional or class-based (legacy), and can be composed together to create complex UIs.",
      code: `// Simple functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Welcome = () => {
  return <h1>Hello, World!</h1>;
}

// Component with props
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Class component (Legacy)
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Component Composition
const Header = () => <h1>My App</h1>;
const Footer = () => <p>&copy; 2024 My App</p>;

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my application!</p>
      </main>
      <Footer />
    </div>
  );
}`,
    },
    {
      title: "Props and State",
      content:
        "Props are read-only data passed from parent to child components. State is managed within components using the useState hook for functional components.",
      code: `// Props example
const App = () => {
  return (
    <div>
      <UserCard name="John Doe" email="john@example.com" isOnline={true} />
      <UserCard name="Jane Smith" email="jane@example.com" isOnline={false} />
    </div>
  );
}

const UserCard = ({ name, email, isOnline }) => {
  return (
    <div className={\`user-card \${isOnline ? 'online' : 'offline'}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
      <span>{isOnline ? '🟢 Online' : '🔴 Offline'}</span>
    </div>
  );
}

// Default props
const Button = ({ text = "Click me", onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

// State with useState Hook
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      
      <div>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name}!</p>
      </div>
    </div>
  );
}`,
    },
    {
      title: "Event Handling",
      content:
        "React handles events using synthetic events that wrap native events, providing consistent behavior across different browsers.",
      code: `const EventHandling = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleChange = (e) => {
    console.log('Input changed:', e.target.value);
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover over me
      </div>
    </div>
  );
};

// Event with Parameters
const ButtonList = () => {
  const handleButtonClick = (buttonName) => {
    alert(\`\${buttonName} was clicked!\`);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
    </div>
  );
};`,
    },
    {
      title: "Conditional Rendering",
      content:
        "React provides multiple ways to conditionally render components based on state or props, including ternary operators, logical AND operators, and function-based rendering.",
      code: `const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');
  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in</h2>
      )}

      {/* Logical AND operator */}
      {isLoggedIn && <button>Logout</button>}
      {notifications.length > 0 && (
        <div>You have {notifications.length} notifications</div>
      )}

      {/* Multiple conditions */}
      {userRole === 'admin' ? (
        <AdminPanel />
      ) : userRole === 'user' ? (
        <UserPanel />
      ) : (
        <GuestPanel />
      )}

      {/* Function-based conditional rendering */}
      {renderContent()}
    </div>
  );

  function renderContent() {
    if (userRole === 'admin') return <AdminDashboard />;
    if (userRole === 'user') return <UserDashboard />;
    return <div>Access denied</div>;
  }
};`,
    },
    {
      title: "Lists and Keys",
      content:
        "React efficiently renders lists of elements using the map function. Keys are essential for React to track changes and optimize re-renders.",
      code: `const ListExamples = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  return (
    <div>
      {/* Simple list */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Complex list with objects */}
      <div>
        {users.map(user => (
          <div key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>

      {/* Filtered list */}
      <div>
        <h3>Adults (30+):</h3>
        {users
          .filter(user => user.age >= 30)
          .map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
      </div>
    </div>
  );
};

// Dynamic Lists with CRUD Operations
const DynamicList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', completed: false },
    { id: 2, name: 'Item 2', completed: true }
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: \`Item \${items.length + 1}\`,
      completed: false
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map(item => (
        <div key={item.id} className="item">
          <span 
            style={{ 
              textDecoration: item.completed ? 'line-through' : 'none' 
            }}
          >
            {item.name}
          </span>
          <button onClick={() => toggleItem(item.id)}>
            {item.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};`,
    },
    {
      title: "Forms and Controlled Components",
      content:
        "Controlled components are form elements whose values are controlled by React state. This provides a single source of truth and enables validation and dynamic behavior.",
      code: `const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      category: 'general',
      subscribe: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <div>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

// Form Validation
const ValidatedForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};`,
    },
    {
      title: "React Hooks - useState and useEffect",
      content:
        "React Hooks allow you to use state and other React features in functional components. useState manages component state, while useEffect handles side effects.",
      code: `import React, { useState, useEffect } from 'react';

// useState Hook
const UseStateExamples = () => {
  // Basic state
  const [count, setCount] = useState(0);
  
  // Object state
  const [user, setUser] = useState({ name: '', age: 0 });
  
  // Array state
  const [items, setItems] = useState([]);
  
  // Function as initial state (for expensive computations)
  const [data, setData] = useState(() => {
    return expensiveCalculation();
  });

  const updateUser = () => {
    setUser(prev => ({ ...prev, name: 'John' }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment (functional)</button>
    </div>
  );
};

// useEffect Hook
const UseEffectExamples = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Effect runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  // Effect runs only once (componentDidMount)
  useEffect(() => {
    fetchInitialData();
  }, []);

  // Effect runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // Effect with cleanup (componentWillUnmount)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`,
    },
    {
      title: "Custom Hooks and Advanced Hooks",
      content:
        "Custom hooks allow you to extract component logic into reusable functions. Other important hooks include useReducer, useRef, useMemo, and useCallback for different use cases.",
      code: `// Custom hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// useReducer for complex state management
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

// useRef for accessing DOM elements
const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};`,
    },
    {
      title: "Context API",
      content:
        "The Context API provides a way to share data between components without passing props down through every level of the component tree. It's useful for global state management.",
      code: `import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();
const UserContext = createContext();

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// User Provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hooks to use contexts
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Components using context
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      {user ? (
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
};

// App with providers
const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <Header />
          <main>
            <p>Content goes here...</p>
          </main>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};`,
    },
    {
      title: "React Router",
      content:
        "React Router enables navigation between different components in a React application, effectively allowing for single-page applications with multiple views.",
      code: `// Installation: npm install react-router-dom

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// Page components
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

// User profile with dynamic routing
const UserProfile = () => {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
};

// Navigation component
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users/123">User 123</Link>
    </nav>
  );
};

// Protected route example
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // This would come from your auth logic
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Main App with routing
const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

// Programmatic navigation
const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Nested routes with Outlet
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This renders child routes */}
    </div>
  );
};`,
    },
    {
      title: "React Native Basics",
      content:
        "React Native allows you to build mobile applications using React. It uses native components instead of web components and provides platform-specific APIs.",
      code: `// Setting up React Native
// npm install -g react-native-cli
// npx react-native init MyReactNativeApp
// cd MyReactNativeApp
// npx react-native run-ios (for iOS)
// npx react-native run-android (for Android)

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Alert
} from 'react-native';

const BasicComponents = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' }
  ]);

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Example</Text>
      
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
  },
});`,
    },

    {
      title: "Common Patterns and Best Practices",
      content:
        "Essential patterns and best practices for writing maintainable, performant React applications including component composition, state management, and optimization techniques.",
      code: `// Higher-Order Component (HOC) pattern
const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      // Check authentication status
      checkAuthStatus().then(setIsAuthenticated);
    }, []);
    
    if (!isAuthenticated) {
      return <div>Please log in to access this content.</div>;
    }
    
    return <WrappedComponent {...props} />;
  };
};

// Usage: const AuthenticatedComponent = withAuth(MyComponent);

// Render Props pattern
const DataFetcher = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);
  
  return children({ data, loading, error });
};

// Usage:
// <DataFetcher url="/api/users">
//   {({ data, loading, error }) => {
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
//     return <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;
//   }}
// </DataFetcher>

// Compound Components pattern (continued)
const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, { 
          isActive: index === activeTab,
          onActivate: () => setActiveTab(index),
          index
        })
      )}
    </div>
  );
};

const Tab = ({ children, isActive, onActivate, title }) => (
  <div>
    <button 
      onClick={onActivate}
      className={isActive ? 'tab-active' : 'tab-inactive'}
    >
      {title}
    </button>
    {isActive && <div className="tab-content">{children}</div>}
  </div>
);

// Usage:
// <Tabs>
//   <Tab title="Tab 1">Content 1</Tab>
//   <Tab title="Tab 2">Content 2</Tab>
//   <Tab title="Tab 3">Content 3</Tab>
// </Tabs>

// Performance Optimization with React.memo
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => onUpdate(item.id)}>Update</button>
        </div>
      ))}
    </div>
  );
});

// useMemo and useCallback for optimization
const OptimizedComponent = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0);

  // Memoize expensive calculations
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize callback functions
  const handleItemUpdate = useCallback((itemId) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, updated: true }
        : item
    ));
  }, []);

  const handleAddItem = useCallback(() => {
    const newItem = {
      id: Date.now(),
      updated: false
    };
    setItems(prev => [...prev, newItem]);
  }, [items.length]);

  return (
    <div>
      <input 
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      <ExpensiveComponent 
        data={filteredItems}
        onUpdate={handleItemUpdate}
      />
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Portal for rendering outside component tree
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

// Debounced search hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Search component with debouncing
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      searchAPI(debouncedSearchTerm).then(setResults);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <div>
        {results.map(result => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
};

// Lazy loading with Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const LazyLoadingExample = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

// Best Practices Summary:

// 1. Component Structure
const WellStructuredComponent = ({ data, onAction }) => {
  // Hooks at the top
  const [localState, setLocalState] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Effects after hooks
  useEffect(() => {
    // Side effects here
  }, []);
  
  // Helper functions
  const handleClick = useCallback(() => {
    onAction(data);
  }, [data, onAction]);
  
  // Early returns for loading/error states
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;
  
  // Main render
  return (
    <div>
      {/* Component content */}
      <button onClick={handleClick}>Action</button>
    </div>
  );
};

// 2. State Management Best Practices
const StateManagementExample = () => {
  // Keep state as flat as possible
  const [user, setUser] = useState({ name: '', email: '' });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Use functional updates for state that depends on previous state
  const addPost = useCallback((newPost) => {
    setPosts(prev => [...prev, newPost]);
  }, []);
  
  // Batch state updates when possible
  const handleUserUpdate = useCallback((userData) => {
    setLoading(true);
    // API call here
    Promise.resolve().then(() => {
      setUser(userData);
      setLoading(false);
    });
  }, []);
  
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

// 3. Testing Utilities (example setup)
const TestableComponent = ({ initialCount = 0, onCountChange }) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange?.(newCount);
  };
  
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button data-testid="increment" onClick={increment}>+</button>
    </div>
  );
};

// Example test (Jest + React Testing Library):
/*
import { render, fireEvent, screen } from '@testing-library/react';

test('increments count when button is clicked', () => {
  const handleCountChange = jest.fn();
  render(<TestableComponent onCountChange={handleCountChange} />);
  
  const button = screen.getByTestId('increment');
  fireEvent.click(button);
  
  expect(screen.getByTestId('count')).toHaveTextContent('1');
  expect(handleCountChange).toHaveBeenCalledWith(1);
});
*/
    `},
  ],
};
