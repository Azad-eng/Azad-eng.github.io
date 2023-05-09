# JavaFx自定义控件（五）- 使用Region类来自定义全新的组件


### 导航
**创建自定义控件的不同方法**
* [一、使用CSS重新设置现有控件的样式](http://azad-eng.github.io/customcontrols01/)
* [二、组合现有控件来创建自定义控件](http://azad-eng.github.io/customcontrols02/)
* [三、扩展现有控件](http://azad-eng.github.io/customcontrols03/)
* [使用Control plus Skin类](http://azad-eng.github.io/customcontrols04/)
* [五、使用Region类](http://azad-eng.github.io/customcontrols05/)

{{<admonition type="info" title="前言">}}
上一篇文章展示了如何基于控件加皮肤方法创建自定义控件，这对于构建控件库非常有用。这一章将展示如何创建基于 JavaFX Region 类的 JavaFX 自定义控件；

Region 类是所有 JavaFX 控件所基于的类。它是一个可调整大小的父节点，可以从 CSS 设置样式。这是您在构建不属于控件库的 JavaFX 自定义控件时希望使用的类。
{{</admonition>}}

### 使用Region的实现类来自定义全新的组件
使用Region类的方法和基于 Control + Skin 的方法之间的主要区别在于：`基于Region 的控件同时包含控制逻辑和 UI`，而基于 Control + Skin 的控件将
逻辑与 UI 分开。逻辑可以在控件中找到，用户界面可以在皮肤中找到。

**步骤1：将控件屏幕截图拖入到PS中，在截图上绘制控件副本**

通过这种方法可以直接获得正确的屏幕尺寸、位置和颜色
{{< image src="/images/java/2023/circle.png" caption="演示">}}

**步骤2：使用SVG[矢量绘图程序](https://yqnn.github.io/svg-path-editor/)手动绘制符号svg**

将绘制好的符号路径添加到基于区域的控件的css代码中

### 示例demo
{{<admonition  title="信息">}}
 **自定义组合组件示例** ：一个可以通过点击右边按钮来让文本域切换相应的值的组合组件——实现℃和°F 的转换功能
{{< image src="/images/java/2023/iosWindow0.png" caption="正常状态">}}

                                            `鼠标悬停前后`

{{< image src="/images/java/2023/iosWindow1.png" caption="悬停状态">}}

{{</admonition>}}
更有趣的是我们需要创建的 CSS 文件，因为它包含了 UI 的所有“魔法”。所以这里是：

```CSS

.region-based {
    /* 预定义变量 */
    -RED      : #ff6058;
    -YELLOW   : #ffbc35;
    -GREEN    : #00c844;
    -GRAY     : #535353;
    -DARK_GRAY: #343535;
}

.region-based .circle {
    -fx-stroke-width: 0.5px;
}

.region-based:close .circle,
.region-based:close:hovered .circle {
    -fx-fill  : -RED;
    /*derive(指定颜色, 在指定颜色基础上加深X%)*/
    -fx-stroke: derive(-RED, -10%);
}
.region-based:close:pressed .circle {
    -fx-fill  : derive(-RED, -20%);
    -fx-stroke: derive(-RED, -30%);
}

.region-based:minimize .circle,
.region-based:minimize:hovered .circle {
    -fx-fill  : -YELLOW;
    -fx-stroke: derive(-YELLOW, -5%);
}
.region-based:minimize:pressed .circle {
    -fx-fill  : -YELLOW;
    -fx-stroke: derive(-YELLOW, -10%);
}

.region-based:zoom .circle,
.region-based:zoom:hovered .circle {
    -fx-fill  : -GREEN;
    -fx-stroke: derive(-GREEN, -10%);
}
.region-based:zoom:pressed .circle {
    -fx-fill  : derive(-GREEN, -20%);
    -fx-stroke: derive(-GREEN, -30%);
}

.region-based:disabled:close .circle,
.region-based:disabled:minimize .circle,
.region-based:disabled:zoom .circle {
    -fx-fill  : -GRAY;
    -fx-stroke: transparent;
}

.region-based:close .symbol,
.region-based:minimize .symbol,
.region-based:zoom .symbol {
    -fx-background-color: transparent;
}

.region-based:hovered:close .symbol {
    -fx-background-color: -DARK_GRAY;
    -fx-border-color    : -DARK_GRAY;
    -fx-scale-shape     : false;
    -fx-shape           : "M6.001,5.429l2.554,-2.555l0.571,0.571l-2.555,2.554l2.55,2.55l-0.572,0.572l-2.55,-2.55l-2.554,2.555l-0.571,-0.571l2.555,-2.554l-2.55,-2.55l0.572,-0.572l2.55,2.55Z";
}
.region-based:hovered:minimize .symbol {
    -fx-background-color: -DARK_GRAY;
    -fx-scale-shape     : false;
    -fx-shape           : "M2.0,5.5l8,0l0,1l-8,0l0,-1Z";
}
.region-based:hovered:zoom .symbol {
    -fx-background-color: -DARK_GRAY;
    -fx-scale-shape     : false;
    -fx-shape           : "M2.696,2.582l4.545,0.656l-3.889,3.889l-0.656,-4.545ZM9.533,9.418l-0.656,-4.545l-3.889,3.889l4.545,0.656Z";
}
.region-based:hovered:zoom:state .symbol {
    -fx-background-color: -DARK_GRAY;
    -fx-scale-shape     : false;
    -fx-shape           : "M6.225,6.111L10.77,6.767L6.881,10.656L6.225,6.111ZM6.004,5.889L5.348,1.344L1.459,5.233L6.004,5.889Z";
}
```
{{<admonition  title="信息">}}
如前所述，我们知道我们需要的所有颜色，因此我们可以直接在我们的 CSS 文件中定义它们。我们有不同状态（-RED、-YELLOW、-GREEN）、禁用状态（-GRAY）和符号（-DARK_GRAY）的颜色。

原始的 MacOS 按钮看起来有一个内部阴影或一个比填充颜色暗一点的边框。为此，我们将描边设置为 0.5px。这也意味着我们必须定义比填充颜色深一点的描边颜色。

这可以通过使用 derive 方法在 JavaFX CSS 中轻松完成。如果我们想创建一个颜色较深的红色边框，我们可以按如下方式实现：
```css
-fx-stroke: derive(-RED, -10%);
```
此代码将根据为 -RED 定义的颜色创建一种颜色，该颜色比给定颜色深 10%。
{{</admonition>}}

```java
package com.ryl.custom.regionBased;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.BooleanPropertyBase;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.ObjectPropertyBase;
import javafx.css.PseudoClass;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.Region;
import javafx.scene.shape.Circle;
import javafx.scene.shape.StrokeType;

import java.util.function.Consumer;


/**
 * @author hansolo
 */
public class RegionControl extends Region {
    public enum Type {CLOSE, MINIMIZE, ZOOM}

    private static final double PREFERRED_WIDTH = 12;
    private static final double PREFERRED_HEIGHT = 12;
    private static final PseudoClass CLOSE_PSEUDO_CLASS = PseudoClass.getPseudoClass("close");
    private static final PseudoClass MINIMIZE_PSEUDO_CLASS = PseudoClass.getPseudoClass("minimize");
    private static final PseudoClass ZOOM_PSEUDO_CLASS = PseudoClass.getPseudoClass("zoom");
    private static final PseudoClass HOVERED_PSEUDO_CLASS = PseudoClass.getPseudoClass("hovered");
    private static final PseudoClass PRESSED_PSEUDO_CLASS = PseudoClass.getPseudoClass("pressed");
    private static final PseudoClass STATE_PSEUDO_CLASS = PseudoClass.getPseudoClass("state");
    private BooleanProperty hovered;
    private BooleanProperty state;
    private static String userAgentStyleSheet;
    private ObjectProperty<Type> type;
    private double size;
    private double width;
    private double height;
    private Circle circle;
    private Region symbol;
    private Consumer<MouseEvent> mousePressedConsumer, mouseReleasedConsumer;

    public RegionControl(final Type type) {
        this.type = new ObjectPropertyBase(type) {
            @Override
            protected void invalidated() {
                Object o = get();
                if (Type.CLOSE.equals(o)) {
                    pseudoClassStateChanged(CLOSE_PSEUDO_CLASS, true);
                    pseudoClassStateChanged(MINIMIZE_PSEUDO_CLASS, false);
                    pseudoClassStateChanged(ZOOM_PSEUDO_CLASS, false);
                } else if (Type.MINIMIZE.equals(o)) {
                    pseudoClassStateChanged(CLOSE_PSEUDO_CLASS, false);
                    pseudoClassStateChanged(MINIMIZE_PSEUDO_CLASS, true);
                    pseudoClassStateChanged(ZOOM_PSEUDO_CLASS, false);
                } else if (Type.ZOOM.equals(o)) {
                    pseudoClassStateChanged(CLOSE_PSEUDO_CLASS, false);
                    pseudoClassStateChanged(MINIMIZE_PSEUDO_CLASS, false);
                    pseudoClassStateChanged(ZOOM_PSEUDO_CLASS, true);
                }
            }

            @Override
            public Object getBean() {
                return RegionControl.this;
            }

            @Override
            public String getName() {
                return "type";
            }
        };
        this.hovered = new BooleanPropertyBase() {
            @Override
            protected void invalidated() {
                pseudoClassStateChanged(HOVERED_PSEUDO_CLASS, get());
            }

            @Override
            public Object getBean() {
                return RegionControl.this;
            }

            @Override
            public String getName() {
                return "hovered";
            }
        };
        this.state = new BooleanPropertyBase(false) {
            @Override
            protected void invalidated() {
                pseudoClassStateChanged(STATE_PSEUDO_CLASS, get());
            }

            @Override
            public Object getBean() {
                return RegionControl.this;
            }

            @Override
            public String getName() {
                return "state";
            }
        };

        pseudoClassStateChanged(CLOSE_PSEUDO_CLASS, Type.CLOSE == type);
        pseudoClassStateChanged(MINIMIZE_PSEUDO_CLASS, Type.MINIMIZE == type);
        pseudoClassStateChanged(ZOOM_PSEUDO_CLASS, Type.ZOOM == type);

        initGraphics();
        registerListeners();
    }

    private void initGraphics() {
        if (Double.compare(getPrefWidth(), 0.0) <= 0 || Double.compare(getPrefHeight(), 0.0) <= 0 || Double.compare(getWidth(), 0.0) <= 0 ||
                Double.compare(getHeight(), 0.0) <= 0) {
            if (getPrefWidth() > 0 && getPrefHeight() > 0) {
                setPrefSize(getPrefWidth(), getPrefHeight());
            } else {
                setPrefSize(PREFERRED_WIDTH, PREFERRED_HEIGHT);
            }
        }

        //为了确保我们的 CSS 文件中的样式将被使用，我们将“region-based”的样式类添加到我们的控件中，将“circle”类添加到Circle中，并将“symbol”类添加到应该显示符号的区域中。

        getStyleClass().add("region-based");

        circle = new Circle();
        circle.getStyleClass().add("circle");
        circle.setStrokeType(StrokeType.INSIDE);

        symbol = new Region();
        symbol.getStyleClass().add("symbol");

        getChildren().setAll(circle, symbol);
    }

    private void registerListeners() {
        widthProperty().addListener(o -> resize());
        heightProperty().addListener(o -> resize());
        addEventFilter(MouseEvent.MOUSE_PRESSED, e -> {
            pseudoClassStateChanged(PRESSED_PSEUDO_CLASS, true);
            if (null == mousePressedConsumer) {
                return;
            }
            mousePressedConsumer.accept(e);
        });
        addEventFilter(MouseEvent.MOUSE_RELEASED, e -> {
            pseudoClassStateChanged(PRESSED_PSEUDO_CLASS, false);
            if (null == mouseReleasedConsumer) {
                return;
            }
            mouseReleasedConsumer.accept(e);
        });
    }

    @Override
    public String getUserAgentStylesheet() {
        if (null == userAgentStyleSheet) {
            userAgentStyleSheet = RegionControl.class.getResource("/region-based.css").toExternalForm();
        }
        return userAgentStyleSheet;
    }

    public void setHovered(final boolean hovered) {
        this.hovered.set(hovered);
    }

    public boolean getState() {
        return state.get();
    }

    public void setState(final boolean state) {
        this.state.set(state);
    }

    public void setOnMousePressed(final Consumer<MouseEvent> mousePressedConsumer) {
        this.mousePressedConsumer = mousePressedConsumer;
    }

    /**
     * 调整大小/重绘
     */
    private void resize() {
        width = getWidth() - getInsets().getLeft() - getInsets().getRight();
        height = getHeight() - getInsets().getTop() - getInsets().getBottom();
        size = Math.min(width, height);

        if (width > 0 && height > 0) {
            setMaxSize(size, size);
            setPrefSize(size, size);

            double center = size * 0.5;
            circle.setRadius(center);
            circle.setCenterX(center);
            circle.setCenterY(center);

            symbol.setPrefSize(size, size);
        }
    }
}
```
我们已经为三个不同的状态定义了一个枚举，我们还为每个状态创建了一个 PseudoClass。除了这些，我们还为悬停和按下状态创建了 PseudoClasses。

对于悬停和类型，我们还创建了属性，以便能够从控件外部获取/设置这些属性。

因为这个控件是一个按钮，所以我们添加了鼠标按下和鼠标释放的使用者，以便稍后能够附加我们自己的处理程序

```java
package com.ryl.custom.regionBased;

import javafx.scene.layout.BorderPane;
import javafx.stage.StageStyle;
import com.ryl.custom.regionBased.RegionControl.Type;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.geometry.Insets;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
import javafx.scene.Scene;

import java.util.function.Consumer;


/**
 * @author hansolo
 */
public class DemoRegionBased extends Application {
    private RegionControl redButton;
    private RegionControl yellowButton;
    private RegionControl greenButton;
    private HBox buttonBox;

    private Stage stage;
    private static double xOffset = 0;
    private static double yOffset = 0;



    @Override
    public void init() {
        redButton = new RegionControl(Type.CLOSE);
        yellowButton = new RegionControl(Type.MINIMIZE);
        greenButton = new RegionControl(Type.ZOOM);
        buttonBox = new HBox(8, redButton, yellowButton, greenButton);

        registerListeners();
    }

    private void registerListeners() {
        redButton.setOnMousePressed((Consumer<MouseEvent>) e -> {
            //"Close pressed"
            stage.close();
        });

        yellowButton.setOnMousePressed((Consumer<MouseEvent>) e -> {
            //"Minimized pressed"
            stage.setIconified(true);
        });

        greenButton.setOnMousePressed((Consumer<MouseEvent>) e -> {
            //"Maximized pressed"
            stage.setMaximized(!stage.isMaximized());
            greenButton.setState(!greenButton.getState());
        });

        buttonBox.addEventFilter(MouseEvent.MOUSE_ENTERED, e -> {
            redButton.setHovered(true);
            yellowButton.setHovered(true);
            greenButton.setHovered(true);
        });
        buttonBox.addEventFilter(MouseEvent.MOUSE_EXITED, e -> {
            redButton.setHovered(false);
            yellowButton.setHovered(false);
            greenButton.setHovered(false);
        });
    }

    @Override
    public void start(final Stage stage) {
        this.stage = stage;
        BorderPane pane = new BorderPane();
        pane.setTop(buttonBox);
        pane.setPadding(new Insets(8));
        pane.setPrefSize(300,150);
        pane.setOnMousePressed(event -> {
            xOffset = stage.getX() - event.getScreenX();
            yOffset = stage.getY() - event.getScreenY();
        });
        pane.setOnMouseDragged(event -> {
            stage.setX(event.getScreenX() + xOffset);
            stage.setY(event.getScreenY() + yOffset);
        });
        Scene scene = new Scene(pane);
        stage.initStyle(StageStyle.UNDECORATED);
        stage.setScene(scene);
        stage.show();
    }

    @Override
    public void stop() {
        Platform.exit();
        System.exit(0);
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

{{<admonition  type="bug" title="总结">}}
在此控件中使用的通过组合 CSS PseudoClasses 来设置控件样式的技术并不是创建这些效果的唯一方法，还应该多尝试其他技术。没有关于如何创建和设置控件样式的通用规则，因此最好检查所有可能性并采用最适合的方法。
{{</admonition>}}

### 参考链接
* [Custom Controls in JavaFX (Part 5)](https://foojay.io/today/custom-controls-in-javafx-part-v/)
* [HanSolo/JavaFXCustomControls(github)](https://github.com/HanSolo/JavaFXCustomControls)
