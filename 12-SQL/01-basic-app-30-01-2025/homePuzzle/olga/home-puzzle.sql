-- Exercise 1: Basic Data Retrieval
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name
FROM 
    employees
WHERE 
    department = 'Marketing'
ORDER BY 
    last_name ASC;

-- Exercise 2: Sales Analysis
SELECT 
    p.name AS product_name,
    SUM(p.price * s.quantity) AS total_revenue
FROM 
    products p
    JOIN sales s ON p.product_id = s.product_id
GROUP BY 
    p.product_id, p.name
HAVING 
    SUM(p.price * s.quantity) > 1000
ORDER BY 
    total_revenue DESC;
    
-- Exercise 3: Customer Engagement Analysis
WITH customer_stats AS (
    SELECT 
        c.customer_id,
        c.name,
        COUNT(DISTINCT o.order_id) AS total_orders,
        SUM(oi.quantity * oi.unit_price) AS total_spent,
        MAX(o.order_date) AS most_recent_order,
        SUM(CASE WHEN o.status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_orders,
        SUM(CASE WHEN o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 90 DAY) THEN 1 ELSE 0 END) AS recent_orders
    FROM 
        customers c
        JOIN orders o ON c.customer_id = o.customer_id
        JOIN order_items oi ON o.order_id = oi.order_id
    GROUP BY 
        c.customer_id,
        c.name
)
SELECT 
    name AS customer_name,
    total_orders,
    ROUND(total_spent, 2) AS total_spent,
    most_recent_order
FROM 
    customer_stats
WHERE 
    total_orders >= 3 
    AND total_spent > 500
    AND recent_orders > 0
    AND cancelled_orders = 0
ORDER BY 
    total_spent DESC;